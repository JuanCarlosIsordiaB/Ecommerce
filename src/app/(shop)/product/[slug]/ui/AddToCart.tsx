'use client';
import { QuantitySelector, SizeSelector } from "@/components";
import { Product, Size } from "@/interfaces";
import { useState } from "react";

interface Props{
    product: Product;
}

const AddToCart = ({product}:Props) => {

    const [size, setSize] = useState<Size | undefined>();
    const [quantity, setQuantity] = useState<number>(1)
    const [error, setError] = useState<boolean>(false)
    
    const addToCart = () => {
        if(!size) {setError(true); return;};
        console.log({size, quantity });
        setError(false);
    }


  return (
    <div>
        {
            error && !size && <span className="text-red-500 block my-3 fade-in">Select a size</span>
        }
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={setSize}
        
      />
      {/* Selector de Cantidad */}
      <QuantitySelector 
        quantity={quantity} 
        onChangedQuantity={setQuantity}
        />
      {/* Button*/}
      <button 
        className="btn-primary my-5"
        onClick={addToCart}
        >Add to Cart</button>
    </div>
  );
};

export default AddToCart;
