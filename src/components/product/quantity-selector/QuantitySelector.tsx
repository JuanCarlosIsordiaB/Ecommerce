"use client";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(quantity);
  const [error, setError] = useState(false);

  const onQuantityChange = (value: number) => {
    if (count + value < 1) return;
    if (count + value > 10) {
      setError(true);
      return;
    }
    setCount(count + value);
    setError(false);
  };

  return (
    <>
      <div className="flex gap-3">
        <button onClick={() => onQuantityChange(-1)}>
          <IoRemoveCircleOutline size={30} />
        </button>
        <span className="w-20 mx-3 px-5 gb-gray-300 text-center rounded-md">
          {count}
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
