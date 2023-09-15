export async function fetchBlogsList<T>(route: string): Promise<T> {
  try {
    const res = await fetch(route);
    if (!res) {
      throw new Error("Failed to fetch data from Blog Category Service");
    }
    return (await res.json()) as Promise<T>;
  } catch (error) {
    console.error("Error while fetching data ", error);
    throw error;
  }
}
