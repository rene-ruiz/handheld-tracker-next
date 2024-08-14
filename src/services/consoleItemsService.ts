import fetchWrapper from "@/utils/fetchWrapper";

export const getConsoleItems = () => fetchWrapper(`console-items/`);

export const modifyConsoleItem = (id: string, data: object) =>
  fetchWrapper(`console-items/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
