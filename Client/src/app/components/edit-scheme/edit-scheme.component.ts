import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { SchemeService } from '../../services/scheme.service';
import { SchemeUpdate } from '../../models/SchemeUpdate';

import { Scheme } from '../../models/Scheme';
import { SchemeField } from '../../models/SchemeField';

declare var M: any;

@Component({
  selector: 'app-edit-scheme',
  templateUrl: './edit-scheme.component.html',
  styleUrls: ['./edit-scheme.component.css'],
})
export class EditSchemeComponent implements OnInit {
  public scheme: Scheme = {
    name: '',
    fields: [],
  };
  public schemeFields: SchemeField[] = [];
  public currentSchemeField: SchemeField = {
    name: '',
    expectType: 'text',
    component: 'textbox',
    displayables: [],
    label: '',
    isRequired: false,
  };
  public updateScheme: SchemeUpdate = {
    newName: '',
    fields: [],
    oldName: '',
  };
  public currentDisplayable: string = '';

  constructor(
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private schemeService: SchemeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Initialize dropdowns for forms
    let elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});

    this.activatedRoute.params.subscribe((params) => {
      const { schemeName } = params;
      this.schemeService
        .getCompleteScheme(schemeName)
        .subscribe((scheme: Scheme) => {
          this.scheme.name = scheme.name;
          this.schemeFields = scheme.fields;
          this.updateScheme.oldName = scheme.name;
        });
    });
  }

  public onSubmit(): void {
    // Check if name exists
    if (this.scheme.name == '') {
      this.flashMessagesService.show('Please add a name to your scheme', {
        cssClass: 'alert danger-alert',
      });
      return;
    }
    // Check if there are scheme fields
    if (this.schemeFields.length == 0) {
      this.flashMessagesService.show('Please add fields to your scheme', {
        cssClass: 'alert danger-alert',
      });
      return;
    }
    this.scheme.fields = this.schemeFields;
    this.updateScheme._id = this.scheme._id;
    this.updateScheme.fields = this.scheme.fields;
    this.updateScheme.newName = this.scheme.name;
    console.log(this.updateScheme);
    this.schemeService.updateScheme(this.updateScheme).subscribe(
      (response) => {
        this.flashMessagesService.show(
          `${this.updateScheme.newName} has been registered`,
          {
            cssClass: 'alert success-alert',
          }
        );
        this.router.navigateByUrl('/admin/schemes');
      },
      (err) => {
        this.flashMessagesService.show(err.error.message, {
          cssClass: 'alert danger-alert',
        });
      }
    );
  }

  public addDisplayableToField(): void {
    // Check for displayable name
    if (this.currentDisplayable == '') {
      this.flashMessagesService.show('Please add name for your displayable', {
        cssClass: 'alert danger-alert',
      });
      return;
    }
    this.currentSchemeField.displayables.push(this.currentDisplayable);
    this.currentDisplayable = '';
  }

  public resetDisplayables(): void {
    this.currentSchemeField.displayables = [];
    this.currentSchemeField.expectType = 'text';
    this.currentDisplayable = '';
  }

  public removeField(index: number): void {
    let fieldsTemp = [];
    this.schemeFields.forEach((field, currentIndex) => {
      if (index != currentIndex) {
        fieldsTemp.push(field);
      }
    });
    this.schemeFields = fieldsTemp;
  }

  public onFieldSubmit(): void {
    // Check for empty field name
    if (this.currentSchemeField.name === '') {
      this.flashMessagesService.show('Please add name for your field', {
        cssClass: 'alert danger-alert',
      });
      return;
    }
    // Check if empty displayables for dropdown
    if (
      this.currentSchemeField.component == 'dropdown' &&
      this.currentSchemeField.displayables.length == 0
    ) {
      this.flashMessagesService.show('Please add options for your dropdown', {
        cssClass: 'alert danger-alert',
      });
      return;
    }
    this.currentSchemeField.label = this.currentSchemeField.name;
    this.schemeFields.push(this.currentSchemeField);
    this.currentSchemeField = {
      name: '',
      expectType: 'text',
      component: 'textbox',
      displayables: [],
      label: '',
    };
  }
}
