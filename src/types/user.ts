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
  avatarUrl?: string | null | undefined;
  accessRights: boolean;
  file?: File | null;
};

export type EmployeeWithoutId = {
  login: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
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
  avatarUrl?: string | null | undefined;
  accessRights: boolean;
  file?: File | null;
};
