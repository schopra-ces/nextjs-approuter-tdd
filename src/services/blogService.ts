import { API_ERROR } from "@/constants";

export async function fetchBlogs<T>(
  route: string
): Promise<T> {
  try {
    const res = await fetch(route);
    if (res.status !== 200) {
      throw new Error(`${API_ERROR} ${res.status}.`)
    }
    return (await res.json()) as Promise<T>;
  } catch (error) {
    throw error;
  }
}