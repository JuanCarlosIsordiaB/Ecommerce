
import { Title } from "@/components";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Shop" subTitle="All the products" className="mb-2"/>
      <ProductGrid products={products}/>
    </>
  );
}
