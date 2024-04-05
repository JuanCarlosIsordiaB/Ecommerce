"use server";

import prisma from "@/lib/prisma";
import { Gender } from "@prisma/client";

interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: Gender;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 15,
  gender,
}: PaginationOptions) => {
  if (isNaN(Number(page)) || isNaN(Number(take))) {
    page = 1;
    take = 12;
  }
  if (page < 1) page = 1;

  try {
    // 1. Obtener los productos con sus imagenes
    const products = await prisma.product.findMany({
      take,
      skip: (page - 1) * take,
      include: {
        images: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where: {
        gender: gender,
      },
    });

    // 2. Obtener el total de paginas
    const totalProducts = await prisma.product.count({
      where: {
        gender: gender,
      },
    });
    const totalPages = Math.ceil(totalProducts / take);
    return {
      currentPage: page,
      totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.images.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
};
