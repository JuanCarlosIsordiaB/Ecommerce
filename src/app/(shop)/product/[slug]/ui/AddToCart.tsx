"use client";
import { QuantitySelector, SizeSelector } from "@/components";
import { CartProduct, Product, Size } from "@/interfaces";
import { useCartStore } from "@/store";
import { use, useState } from "react";

interface Props {
  product: Product;
}

const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);

  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);

  const addToCart = () => {
    if (!size) {
      setError(true);
      return;
    }
    //console.log({ size, quantity, product });
    const cartProduct: CartProduct = {
      id: product.id,
      title: product.title,
      slug: product.slug,
      image: product.images[0],
      price: product.price,
      size: size,
      quantity: quantity,
    };
    addProductToCart(cartProduct);
    setSize(undefined);
    setQuantity(1);
    
    setError(false);
  };

  return (
    <div>
      {error && !size && (
        <span className="text-red-500 block my-3 fade-in">Select a size</span>
      )}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={setSize}
      />
      {/* Selector de Cantidad */}
      <QuantitySelector quantity={quantity} onChangedQuantity={setQuantity} />
      {/* Button*/}
      <button className="btn-primary my-5" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
