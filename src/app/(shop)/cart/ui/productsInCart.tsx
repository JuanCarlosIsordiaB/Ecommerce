"use client";
import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ProductsInCart = () => {
  const updateProductQuantity = useCartStore((state) => state.updateProductQuantity);
  const removeProductFromCart = useCartStore((state) => state.removeProductFromCart);
  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore((state) => state.cart);


  useEffect(() => {
    setLoaded(true);
  });

  if (!loaded) return <p>Loading....</p>;

  

  return (
    <>
      { productsInCart.map((product) => (
        <div
          key={`${product.slug}-${product.size}`}
          className="flex mb-5 bg-gray-200 p-4 rounded-md shadow-md"
        >
          <Image
            src={`/products/${product.image}`}
            alt={product.title}
            width={100}
            height={100}
            className="mr-5 rounded "
          />
          <div>
            <Link
              className="hover:underline cursor-pointer"
              href={`/product/${product.slug}`}
            >
              {product.title}
            </Link>

            <p>${product.price}</p>
            <p>
              {" "}
              <span className="font-bold">Size selected:</span> {product.size}
            </p>
            <QuantitySelector
              quantity={product.quantity}
              onChangedQuantity={(quantity) => updateProductQuantity(product, quantity)}
            />
            <button 
              className="underline mt-3 hover:text-red-500 transition-all"
              onClick={() => removeProductFromCart(product)}
            >Remove Item</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsInCart;
