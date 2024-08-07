const DOMAIN_URL = "http://127.0.0.1:8000/api";
const useQuery = async () => {
  const res = await fetch(`${DOMAIN_URL}/console-items/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const modifyData = async (id: string, data: object) => {
  const res = await fetch(`${DOMAIN_URL}/console-items/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to modify data");
  }
  return res.json();
};

export { useQuery, modifyData };
