// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//FORM MODULES
import { MatSelectModule } from '@angular/material/select';

// LOGIN MODULES
import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

// LOCAL MODULES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutDynamicFormComponent } from './components/Request-Forms-Components/layout-dynamic-form/layout-dynamic-form.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DynamicFormQuestionComponent } from './components/Request-Forms-Components/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './components/Request-Forms-Components/dynamic-form/dynamic-form.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UsersComponent } from './components/users/users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AssignSchemeToUserComponent } from './components/assign-scheme-to-user/assign-scheme-to-user.component';
import { UserRequestDashboardComponent } from './components/Request-Forms-Components/user-request-dashboard/user-request-dashboard.component';
// SERVICE MODULES
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthAdminGuard } from './guards/authadmin.guard';
import { AuthUserGuard } from './guards/authuser.guard';
import { ListAllSchemesComponent } from './components/list-all-schemes/list-all-schemes.component';
import { EditSchemeComponent } from './components/edit-scheme/edit-scheme.component';
import { AddSchemeComponent } from './components/add-scheme/add-scheme.component';
import { AdminRequestDashboardComponent } from './components/admin-request-dashboard/admin-request-dashboard.component';
import { AdminLayoutDynamicFormComponent } from './components/Request-Forms-Components-admin/admin-layout-dynamic-form/admin-layout-dynamic-form.component';
import { AdminDynamicFormQuestionComponent } from './components/Request-Forms-Components-Admin/admin-dynamic-form-question/admin-dynamic-form-question.component';
import { UserUnansweredFormsDashboardComponent } from './components/View-Forms-Components/User/user-unanswered-forms-dashboard/user-unanswered-forms-dashboard.component';
import { DynamicFormLayoutPendingComponent } from './components/View-Forms-Components/User/dynamic-form-layout-pending/dynamic-form-layout-pending.component';
import { DynamicFormPendingComponent } from './components/View-Forms-Components/User/dynamic-form-pending/dynamic-form-pending.component';
import { DynamicFormPendingQuestionComponent } from './components/View-Forms-Components/User/dynamic-form-pending-question/dynamic-form-pending-question.component';
import { UserFormHistoryDashboardComponent } from './components/user-form-history-dashboard/user-form-history-dashboard.component';
import { AdminFormHistoryDashboardComponent } from './components/admin-form-history-dashboard/admin-form-history-dashboard.component';
import { AdminPendingFormReviewDashboardComponent } from './components/admin-pending-form-review-dashboard/admin-pending-form-review-dashboard.component';
import { AdminHistoryFormReviewDashboardComponent } from './components/admin-history-form-review-dashboard/admin-history-form-review-dashboard.component';
import { RouteInfoDashboardComponent } from './components/Routes-Components/route-info-dashboard/route-info-dashboard.component';
import { DynamicFormAdminQuestionComponent } from './components/View-Forms-Components/Admin/dynamic-form-admin-question/dynamic-form-admin-question.component';
import { DynamicFormAdminComponent } from './components/View-Forms-Components/Admin/dynamic-form-admin/dynamic-form-admin.component';
import { DynamicFormLayoutAdminComponent } from './components/View-Forms-Components/Admin/dynamic-form-layout-admin/dynamic-form-layout-admin.component';
import { AdminUnansweredFormsDashboardComponent } from './components/View-Forms-Components/Admin/admin-unanswered-forms-dashboard/admin-unanswered-forms-dashboard.component';
import { RouteReviewComponent } from './components/Routes-Components/route-review/route-review.component';
import { AddRouteComponent } from './components/add-route/add-route.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    LayoutDynamicFormComponent,
    UserRegistrationComponent,
    UsersComponent,
    EditUserComponent,
    AssignSchemeToUserComponent,
    UserRequestDashboardComponent,
    ListAllSchemesComponent,
    EditSchemeComponent,
    AddSchemeComponent,
    AdminRequestDashboardComponent,
    AdminDynamicFormQuestionComponent,
    AdminLayoutDynamicFormComponent,
    UserUnansweredFormsDashboardComponent,
    DynamicFormLayoutPendingComponent,
    DynamicFormPendingComponent,
    DynamicFormPendingQuestionComponent,
    UserFormHistoryDashboardComponent,
    AdminFormHistoryDashboardComponent,
    AdminPendingFormReviewDashboardComponent,
    AdminHistoryFormReviewDashboardComponent,
    RouteInfoDashboardComponent,
    DynamicFormAdminQuestionComponent,
    DynamicFormAdminComponent,
    DynamicFormLayoutAdminComponent,
    AdminUnansweredFormsDashboardComponent,
    RouteReviewComponent,
    AddRouteComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
  ],
  providers: [AuthService, AuthUserGuard, AuthAdminGuard, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
