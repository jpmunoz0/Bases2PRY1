export interface User {
  _id?: string;
  username?: string;
  name?: string;
  password?: string;
  isAdmin?: boolean;
  accessibleSchemes?: [
    {
      name: string;
    }
  ];
}

export default User;
