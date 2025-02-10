import { getAllCategories } from "@sanity/lib/products/getAllCategories";
import { getAllProducts } from "@sanity/lib/products/getAllProducts";
import ProductsView from "@src/components/ProductsView";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  return (
    <div>
      <h1>hello world 123</h1>
      <div>
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
