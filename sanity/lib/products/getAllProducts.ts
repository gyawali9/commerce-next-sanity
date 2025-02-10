import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function getAllProducts() {
  const ALL_PRODUCTS_QUERY = defineQuery(
    `*[_type == "product"] | order(name asc)`
  );
  try {
    // using sanityFetch to send the query
    const products = await sanityFetch({
      query: ALL_PRODUCTS_QUERY,
    });
    // return the products or an empty array if no products are found
    return products.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
