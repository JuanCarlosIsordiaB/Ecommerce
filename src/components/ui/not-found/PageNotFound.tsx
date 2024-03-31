import { titleFont } from "@/config/fonts";
import Link from "next/link";
import Image from "next/image";

export default function PageNotFoundPage() {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle ">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Something went wrong.....</p>
        <Link href="/" className="block m-3 p-2 rounded-md bg-gray-300 transition-all hover:bg-gray-600 hover:text-white font-semibold">
          Go Back
        </Link>
      </div>
      <div className="px-5 mx-5">
        <Image
            src="/imgs/starman_750x750.png"
            alt="Starman"
            className="p-5 sm:p-0"
            width={500}
            height={500}
        />
      </div>
    </div>
  );
}
