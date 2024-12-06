import api from "Services/Api";

export default async function UseGetList(url: string) {
  try {
    const response = await api.get(
      `${import.meta.env.VITE_REACT_API_URL}${url}`
    );

    if (!response.data) {
      throw new Error("Response failed");
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
}
