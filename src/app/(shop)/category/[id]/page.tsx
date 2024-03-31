import { Title } from "@/components";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";

interface Props {
  params: {
    id: Category;
  };
}

const products = initialData.products;

export default function ItemPage({ params }: Props) {
  const { id } = params;

  const productsFiltered = products.filter((product) => product.gender === id);
  const labels: Record<Category, string > = {
    men: "Men",
    women: "Women",
    kid: "Kids",
    unisex: "Unisex",
  };

  return (
    <>
      <Title
        title={`${(labels)[id]}`}
        subTitle={`All produdcts for ${id}`}
        className="mb-2"
      />
      <ProductGrid products={productsFiltered} />
    </>
  );
}
