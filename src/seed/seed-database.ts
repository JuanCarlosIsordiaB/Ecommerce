import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  //1. Delete all data
  await Promise.all([
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
  ]);

  // 2. Categories
  const { categories, products } = initialData;

  const categoriesData = categories.map((category) => ({
    name: category,
  })); //Creamos un arreglo de objetos con las categorias
  await prisma.category.createMany({ data: categoriesData }); //Insertamos las categorias en la base de datos
  const categoriesDB = await prisma.category.findMany(); //Obtenemos las categorias de la base de datos

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); //<string=shirt> <string=id> //Creamos un objeto con las categorias y sus id y estas son string y lowerCase

  //Insertando productos a la base de datos
  products.forEach(async (product) => {
    const { type, images, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: { ...rest, categoryId: categoriesMap[type] },
    });

    //Insertando Images
    const imagesData = images.map((image, index) => ({
      url: image,
      alt: `image product ${index}`,
      productId: dbProduct.id,
    }));
    await prisma.productImage.createMany({ data: imagesData });
  });

  console.log("Seed database ...");
}

(() => {
  main();
})();
