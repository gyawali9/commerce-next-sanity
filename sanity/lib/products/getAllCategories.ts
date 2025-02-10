import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function getAllCategories() {
  const ALL_CATEGORIES_QUERY = defineQuery(
    `*[_type == "category"] | order(name asc)`
  );
  try {
    // using sanityFetch to send the query
    const categories = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
    });
    // return the categories or an empty array if no categories are found
    return categories.data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
