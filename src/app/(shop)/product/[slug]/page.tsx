import { getProductBySlug } from "@/actions";
import {
  ProductSlideShow,
  QuantitySelector,
  SizeSelector,
  ProductMobileSlideShow,
  StockLabel,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);
  if (!product) {
    notFound();
  }
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2 ">
        {/* Mobile SlideShow */}
        <ProductMobileSlideShow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />
        {/* Deshtop SlideShow*/}
        <ProductSlideShow 
          title={product.title} 
          images={product.images} 
          className="hidden md:block"
        />
      </div>
      <div className="col-span-1 md:col-span-1 px-5 ">
        <StockLabel slug={product.slug} />
        <h1 className={`${titleFont.className}`}>{product.title}</h1>
        <p className="text-lg mb-5">${product.price}</p>
        {/* Selector de Tallas */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />
        {/* Selector de Cantidad */}
        <QuantitySelector quantity={0} />
        {/* Button*/}
        <button className="btn-primary my-5">Add to Cart</button>
        {/* Description*/}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light mb-10">{product.description}</p>
      </div>
    </div>
  );
}
