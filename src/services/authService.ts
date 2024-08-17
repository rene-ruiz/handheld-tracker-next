import { getToken } from "@/utils/authHelper";
import fetchWrapper from "@/utils/fetchWrapper";

export const signUp = (data: object) =>
  fetchWrapper(`register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const signIn = async (data: object) => {
  const response = await fetchWrapper(`login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  localStorage.setItem("access", response.data.access);
  localStorage.setItem("refresh", response.data.refresh);
  return response;
};

export const userInfo = () => fetchWrapper(`userinfo/`);

export const signOut = (data: object) => {
  fetchWrapper(`logout/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  });
  localStorage.clear();
};

export const tokenRefresh = (data: object) =>
  fetchWrapper(`token/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
