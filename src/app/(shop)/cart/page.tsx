import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]];

export default function CartPage() {
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
                  <QuantitySelector quantity={2} />
                  <button className="underline mt-3">Remove Item</button>
                </div>
              </div>
            ))}
          </div>
          {/* Checkout  */}
          <div className="bg-gray-200  rounded-xl shadow-xl p-7">
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
