let controller: AbortController;
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const authHeaders = (token: any) => {
  return {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

const get = async (url: RequestInfo | URL) => {
  controller = new AbortController();
  const signal = controller.signal;
  const response = await fetch(url, {
    method: "GET",
    headers,
    signal,
  });

  return await response.json();
};

const authGet = async (url: RequestInfo | URL, token: any) => {
  try {
    controller = new AbortController();
    const signal = controller.signal;
    const response = await fetch(url, {
      method: "GET",
      headers: authHeaders(token),
      credentials: "include",
      signal,
    });

    return await response.json();
  } catch (error) {
    if ((error as Error).message === "Failed to fetch") {
      const fetchError = new Error("Failed to fetch");

      fetchError.name = "failedToFetch";
      throw fetchError;
    }
    throw error;
  }
};

const post = async (url: RequestInfo | URL, body: any) => {
  controller = new AbortController();
  const signal = controller.signal;
  const response = await fetch(url, {
    method: "POST",
    headers,
    body,
    credentials: "include",
    signal,
  });

  return await response.json();
};

const authPost = async (url: RequestInfo | URL, body: any, token: any) => {
  try {
    controller = new AbortController();
    const signal = controller.signal;
    const response = await fetch(url, {
      method: "POST",
      headers: authHeaders(token),
      body,
      credentials: "include",
      signal,
    });

    return await response.json();
  } catch (error) {
    if ((error as Error).message === "Failed to fetch") {
      const fetchError = new Error("Failed to fetch");

      fetchError.name = "failedToFetch";
      throw fetchError;
    }
    throw error;
  }
};
const put = async (url: RequestInfo | URL, body: any) => {
  const response = await fetch(url, {
    method: "PUT",
    headers,
    body,
  });

  return await response.json();
};

const _delete = async (url: RequestInfo | URL) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers,
  });

  return await response.json();
};

const authDelete = async (url: RequestInfo | URL, token: any) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: authHeaders(token),
      credentials: "include",
    });

    return await response.json();
  } catch (error) {
    if ((error as Error).message === "Failed to fetch") {
      const fetchError = new Error("Failed to fetch");

      fetchError.name = "failedToFetch";
      throw fetchError;
    }
    throw error;
  }
};

const abort = () => {
  if (controller) {
    controller.abort();
  }
};

export const http = {
  get,
  authGet,
  post,
  authPost,
  put,
  delete: _delete,
  authDelete: authDelete,
  abort,
};
