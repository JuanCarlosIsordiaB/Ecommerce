"use client";
import { useEffect, useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;

  onChangedQuantity: (quantity: number) => void;
}

export const QuantitySelector = ({ quantity, onChangedQuantity }: Props) => {
  
  const [error, setError] = useState(false);

  const onQuantityChange = (value: number) => {
    if (quantity + value < 1) return;
    if (quantity + value > 10) {
      setError(true);
      return;
    }
    onChangedQuantity(quantity + value);
    setError(false);
  };


  
  return (
    <>
      <div className="flex gap-3">
        <button onClick={() => onQuantityChange(-1)}>
          <IoRemoveCircleOutline size={30} />
        </button>
        <span 
          className="w-20 mx-3 px-5 gb-gray-300 text-center rounded-md"
        >
          {quantity}
        </span>

        <button onClick={() => onQuantityChange(+1)}>
          <IoAddCircleOutline size={30} />
        </button>
      </div>
      {error && <span className="text-red-500 block my-3 ">Max 10 per order</span>}
    </>
  );
};

export default QuantitySelector;
