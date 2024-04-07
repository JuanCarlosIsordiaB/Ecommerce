'use client'
import { getStockBySlug } from "@/actions/products/get-stock-by-slug";
import { titleFont } from "@/config/fonts";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = async ({ slug }: Props) => {
    const [stock, setStock] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
  
  const getStock = async () => {
    const productStock = await getStockBySlug(slug);
    setStock(productStock);
    
  }
  useEffect(() => {
    getStock();
    
  }, []);

  return (
    <h1 className={`${titleFont.className} text-sm`}>
      Products in Stock: {stock}
    </h1>
  );
};
