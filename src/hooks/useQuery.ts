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

const signUp = async (data: object) => {
  const res = await fetch(`${DOMAIN_URL}/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to post data");
  }
  return res.json();
};

const signIn = async (data: object) => {
  const res = await fetch(`${DOMAIN_URL}/signIn/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
};

const userInfo = async (data: object) => {
  const res = await fetch(`${DOMAIN_URL}/userinfo/`);

  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
};

const logout = async (data: object) => {
  const res = await fetch(`${DOMAIN_URL}/userinfo/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
};

const tokenRefresh = async (data: object) => {
  const res = await fetch(`${DOMAIN_URL}/token/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
};

export { useQuery, modifyData, signUp, signIn, userInfo, logout, tokenRefresh };
