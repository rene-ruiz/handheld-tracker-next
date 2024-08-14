export interface SignUpData {
  username: string;
  password: string;
  email?: string;
}

export interface SignInData {
  username: string;
  password: string;
}

export interface UserInfo {
  id: string;
  username: string;
  email: string;
}
