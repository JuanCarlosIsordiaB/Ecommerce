"use client";
import { generatePaginationNumbers } from "@/utils";
import Link from "next/link";
import clsx from "clsx";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
  totalPages: number;
}

export const PaginationSlice = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get("page") ?? 1;
  const currentPage  =isNaN(+pageString) ? 1 : +pageString;

  if(currentPage < 1 || isNaN(+pageString)) redirect(pathname);

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  console.log({ pathname, searchParams, currentPage });

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") {
      return `${pathname}?${params.toString()}`;
    }

    if (+pageNumber <= 0) {
      return `${pathname}`;
    }

    if (+pageNumber > totalPages) {
      //Cuando llega a la ultima pagina
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex text-center mt-10 mb-20 justify-center">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item ">
            <Link
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(+currentPage - 1)}
            >
              <IoChevronBackOutline size={30} />
            </Link>
          </li>
          {allPages.map((page, index) => (
            <li key={page + '-' + index} className="page-item active">
              <Link
                className={clsx("page-link relative block py-1.5 px-3 rounded border-0  outline-none transition-all duration-300   hover:text-white hover:bg-blue-600  ", {
                  'bg-blue-500 text-white shadow-md hover:text-white': page === currentPage,
                })}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 rounded border-0  outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(+currentPage + 1)}
            >
              <IoChevronForwardOutline size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationSlice;
