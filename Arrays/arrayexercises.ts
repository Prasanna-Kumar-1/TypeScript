const ages: number[] = [];

const board2: string[][] = [
  ["x", "0", "x"],
  ["x", "0", "x"],
  ["x", "0", "x"],
];

type Product = {
  name: "coffeemug";
  price: 9.99;
};

//function calling
function getTotal(products: Product[]): number {
  let total = 0;
  products.forEach((product) => {
    total += product.price;
  });
  return total;
}
