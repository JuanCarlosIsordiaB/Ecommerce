export const revalidate = 60; // revalidate every 60 seconds
import { getPaginatedProductsWithImages } from "@/actions";
import { Title } from "@/components";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import PaginationSlice from "@/components/ui/pagination/PaginationSlice";
import { Gender } from "@prisma/client";
import { redirect } from "next/navigation";



interface Props {
  params: {
    gender: string;
  },
  searchParams: {
    page?: string;
  }
}

export default async function ItemPage({ params, searchParams }: Props) {
  const { gender } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const {products, currentPage, totalPages} = await getPaginatedProductsWithImages({page, gender: gender as Gender});
  console.log({currentPage, totalPages});

  if(products.length === 0) redirect(`/gender/${gender}`);

  const labels: Record<string, string > = {
    'men': "Men",
    'women': "Women",
    'kid': "Kids",
    'unisex': "Unisex",
  };

  return (
    <>
      <Title
        title={`${(labels)[gender]}`}
        subTitle={`All produdcts for ${gender}`}
        className="mb-2"
      />
      <ProductGrid products={products} />
      <PaginationSlice totalPages={totalPages} />
    </>
  );
}
