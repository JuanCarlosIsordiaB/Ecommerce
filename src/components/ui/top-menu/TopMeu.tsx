"use client";
import Link from "next/link";
import { titleFont } from "@/config/fonts";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { useUIStore, useCartStore} from "@/store";
import { useEffect, useState } from "react";

export const TopMeu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItems = useCartStore((state) => state.getTotalItems());


  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
  }, [])
  
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Ecommerce
          </span>
          <span> | Shop</span>
        </Link>
      </div>
      {/* Categories*/}
      <div className="hidden sm:block">
        <div>
          <Link
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
            href="/gender/men"
          >
            Mens
          </Link>
          <Link
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
            href="/gender/women"
          >
            Womens
          </Link>
          <Link
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
            href="/gender/kid"
          >
            Kids
          </Link>
        </div>
      </div>
      {/* Search, Cart, Menu */}
      <div className="flex items-center ">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5 " />
        </Link>
        
        <Link href={
          ((totalItems === 0) && isLoading)
           ? '/empty' 
           : "/cart"
           } className="mx-2">
          <div className="relative">
            {(isLoading && totalItems > 0) && (
              <span className="fade-in absolute text-xs rounded-full px-1 font-bold -right-2 -top-2 bg-blue-700 text-white ">
                {totalItems}
              </span>
            )}

            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          className="m-2 p-2 rounded-md translate-x-0 hover:bg-gray-200"
          onClick={openSideMenu}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default TopMeu;
