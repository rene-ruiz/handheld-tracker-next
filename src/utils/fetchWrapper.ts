const DOMAIN_URL = "http://127.0.0.1:8000/api/";

const fetchWrapper = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const res = await fetch(`${DOMAIN_URL}${endpoint}`, options);
    if (res.status === 201) {
      return {
        success: true,
        data: await res.json(),
      };
    } else if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    return {
      success: true,
      data: await res.json(),
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "An unknown error occurred.",
    };
  }
};

export default fetchWrapper;
