import {  Title } from "@/components";
import Link from "next/link";
import ProductsInCart from "./ui/productsInCart";
import OrderSummary from "./ui/orderSummary";



export default function CartPage() {
  //if (productsInCart.length === 0) redirect("/empty");

  return (
    <div className="flex justify-center px-3 md:px-10 mb-72 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title="Cart" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-10">
          {/* Cart Items */}
          <div className="flex flex-col mt-5 ">
            <span className="text-xl">Add more items</span>
            <Link href="/" className="underline mb-5">
              Continue Shopping
            </Link>

            {/* Items */}
            <ProductsInCart/>
            
          </div>
          {/* Checkout  */}
          <div className="bg-gray-200  rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2 font-bold">Order Summary</h2>
            <OrderSummary />
            <div className="mt-5 mb-2 w-full">
              <Link
                href="/checkout/address"
                className="flex btn-primary justify-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
