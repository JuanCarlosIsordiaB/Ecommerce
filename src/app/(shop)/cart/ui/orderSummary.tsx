'use client';

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import React, { useEffect, useState } from "react";

export const OrderSummary = () => {
    const [loaded, setLoaded] = useState(false);
    const {subTotal,tax,total,totalItems}  = useCartStore((state) => state.getSummaryInformation());


    useEffect(() => {
      setLoaded(true);
    }, [])

    if (!loaded) return <div>Loading...</div>;
    
  return (
    <div className="grid grid-cols-2">
      <span>No. Products</span>
      <span className="text-right"> {totalItems}</span>

      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subTotal)} </span>

      <span>Taxes 12%</span>
      <span className="text-right">{currencyFormat(tax)} </span>

      <span className="font-semibold">Total:</span>
      <span className="text-right font-semibold">{currencyFormat(total)} </span>
    </div>
  );
};

export default OrderSummary;
