import { getToken } from "@/utils/authHelper";
import fetchWrapper from "@/utils/fetchWrapper";

export const getConsoleItems = () => {
  const token = getToken();
  return fetchWrapper(`console-items/`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
};

export const modifyConsoleItem = (id: string, data: object) => {
  const token = getToken();
  return fetchWrapper(`console-items/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const addFavorite = (data: object) => {
  const token = getToken();
  return fetchWrapper(`user-consoles/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};
