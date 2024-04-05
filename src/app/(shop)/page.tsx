export const revalidate = 60; // revalidate every 60 seconds

import { getPaginatedProductsWithImages } from "@/actions";
import { Title } from "@/components";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import PaginationSlice from "@/components/ui/pagination/PaginationSlice";
import { redirect } from "next/navigation";


//const products = initialData.products;

interface Props {
  searchParams: {
    page?: string;
  }
}

export default async function Home({searchParams}:Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const {products, currentPage, totalPages} = await getPaginatedProductsWithImages({page});
  console.log({currentPage, totalPages});

  if(products.length === 0) redirect('/');
  
  
  return (
    <>
      <Title title="Shop" subTitle="All the products" className="mb-2"/>
      <ProductGrid products={products}/>
      <PaginationSlice totalPages={totalPages}  />
    </>
  );
}
