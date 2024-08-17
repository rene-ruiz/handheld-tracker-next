import { HandHeld } from "./handheld";

export type ApiResponse =
  | { success: boolean; data: HandHeld[]; message?: undefined }
  | { success: boolean; message: string; data?: undefined };

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
