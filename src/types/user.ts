export type UserLogin = {
  login: string;
  password: string;
};

export type Employee = {
  id: string;
  login: string;
  email: string;
  role: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nickName: string;
  job: string;
  city: string;
  tel: string;
  telegramLink?: string;
  facebookLink?: string;
  instagramLink?: string;
  twitterLink?: string;
  descUser?: string;
  avatarUrl?: string;
  accessRights: boolean;
};

export type EmployeeWithoutId = Omit<Employee, 'id'>;