
export function getURLAPIAgro(path = "") {
    return `${process.env.API_URL_AGROBAHIA || "http://localhost:1337"}${path}`;
  }
  export async function fetchAPIAgroBahia(path) {
    const requestUrl = getURLAPIAgro(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }
