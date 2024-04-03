"use client";
import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";
import { IoCardOutline } from "react-icons/io5";
import clsx from "clsx";
const productsInCart = [initialData.products[0], initialData.products[1]];

interface Props {
  params: {
    id: string;
  };
}

export default function CheckoutPage({ params }: Props) {
  const { id } = params;
  //TODO: verificar si el id es del usuario
  // si no es del usuarios redirect();
  return (
    <div className="flex justify-center px-3 md:px-10 mb-72 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title={`Order #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-10">
          {/* Cart Items */}
          <div className="flex flex-col mt-5 ">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true,
                }
              )}
            >
              <IoCardOutline size={30} />
              <span className="mx-2 text-l">Pending</span>
              <span className="mx-2 text-l">Order Paid</span>
            </div>

            {/* Items */}
            {productsInCart.map((product) => (
              <div
                key={product.slug}
                className="flex mb-5 bg-gray-200 p-4 rounded-md shadow-md"
              >
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="mr-5 rounded "
                />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <p>Items: 3</p>
                  <p className="font-bold">Total: ${product.price * 3}</p>

                  <button className="underline mt-3">Remove Item</button>
                </div>
              </div>
            ))}
          </div>
          {/* Checkout  */}
          <div className="bg-gray-200  rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2 font-bold">Order Address</h2>
            <div className="mb-10">
              <p>Juan Carlos Isordia</p>
              <p>Av. Carranza #322</p>
              <p>Col. Centro</p>
              <p>CP: 67322</p>
            </div>
            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-300 mb-10" />

            <h2 className="text-2xl mb-2 font-bold">Order Summary</h2>
            <div className="grid grid-cols-2">
              <span>No. Products</span>
              <span className="text-right">3 Items</span>

              <span>Subtotal</span>
              <span className="text-right">$100.00 </span>

              <span>Taxes 12%</span>
              <span className="text-right">$100.00 </span>

              <span className="font-semibold">Total:</span>
              <span className="text-right font-semibold">$9000.00 </span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    "bg-red-500": false,
                    "bg-green-700": true,
                  }
                )}
              >
                <IoCardOutline size={30} />
                <span className="mx-2 text-l">Pending</span>
                <span className="mx-2 text-l">Order Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
