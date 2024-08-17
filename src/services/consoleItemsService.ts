import { getToken } from "@/utils/authHelper";
import fetchWrapper from "@/utils/fetchWrapper";

export const getConsoleItems = () => fetchWrapper(`console-items/`);

export const modifyConsoleItem = (id: string, data: object) =>
  fetchWrapper(`console-items/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  });
