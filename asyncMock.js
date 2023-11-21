const products = [
  {
    id: 1,
    nombre: "Iphone 14",
    precio: 1500,
    category: "celulares",
    img: "../src/assets/Iphone14.webp",
    stock: 15,
  },
  {
    id: 2,
    nombre: "Iphone 13 PRO",
    precio: 1300,
    category: "celulares",
    img: "../src/assets/Iphone13PRO.webp",
    stock: 8,
  },
  {
    id: 3,
    nombre: "Iphone 13",
    precio: 1100,
    category: "celulares",
    img: "../src/assets/Iphone13.webp",
    stock: 5,
  },
  {
    id: 4,
    nombre: "Iphone 11 PRO",
    precio: 800,
    category: "celulares",
    img: "../src/assets/Iphone11PRO.webp",
    stock: 11,
  },
  {
    id: 5,
    nombre: "Acer Laptop",
    precio: 1800,
    category: "computadoras",
    img: "../src/assets/acerLaptop.webp",
    stock: 7,
  },
  {
    id: 6,
    nombre: "Samsung Laptop",
    precio: 2700,
    category: "computadoras",
    img: "../src/assets/samsungLaptop.webp",
    stock: 6,
  },
  {
    id: 7,
    nombre: "Auriculares Kotion",
    precio: 600,
    category: "auriculares",
    img: "../src/assets/aurisKotion.webp",
    stock: 16,
  },
  {
    id: 8,
    nombre: "Auriculares Rattlesnake",
    precio: 500,
    category: "auriculares",
    img: "../src/assets/aurisRattle.webp",
    stock: 10,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id == productId));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (prod) => prod.category === category
      );
      resolve(filteredProducts);
    }, 500);
  });
};
