
export function getURLAPIAgro(path = "") {
    return `${process.env.API_URL_AGROBAHIA || "https://agro-strapi.herokuapp.com"}${path}`;
  }
  export async function fetchAPIAgroBahia(path) {
    const requestUrl = getURLAPIAgro(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }
