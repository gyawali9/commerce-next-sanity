import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductByName = async (searchParam: string) => {
  const PRODUCT_SEARCH_QUERY = defineQuery(`
        *[_type == "product" && name match $searchParam] | order(name asc)
        `);

  try {
    // using sanityFetch to send query and pass the search parameter  with a wildcard
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}*`,
      },
    });

    // returning ths list of products or an empty array if no products are found
    return products.data || [];
  } catch (error) {
    console.error("Error searching for products by name", error);
    return [];
  }
};
