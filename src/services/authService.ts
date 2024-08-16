import fetchWrapper from "@/utils/fetchWrapper";

export const signUp = (data: object) =>
  fetchWrapper(`register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const signIn = (data: object) =>
  fetchWrapper(`login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const userInfo = () => fetchWrapper(`userinfo/`);

export const logout = (data: object) =>
  fetchWrapper(`userinfo/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const tokenRefresh = (data: object) =>
  fetchWrapper(`token/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
