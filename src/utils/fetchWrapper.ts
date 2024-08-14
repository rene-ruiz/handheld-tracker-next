const DOMAIN_URL = "http://127.0.0.1:8000/api/";

const fetchWrapper = async (endpoint: string, options: RequestInit = {}) => {
  const res = await fetch(`${DOMAIN_URL}${endpoint}`, options);
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

export default fetchWrapper;
