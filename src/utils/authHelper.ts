import { jwtDecode, JwtPayload } from "jwt-decode";

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("access");
  }
};

export const getRefresh = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("refresh");
  }
};

export const tokenExpired = (token: string) => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    if (decoded?.exp && decoded.exp * 1000 > Date.now()) {
      return false;
    } else return true;
  } catch (err) {
    console.log("expired check failed!");
    return true;
  }
};

export const loggedIn = () => {
  const token = getToken();
  return !!token && !tokenExpired(token);
};
