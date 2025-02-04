const products =[
    {
      id: 1,
      name: 'Poseidon',
      img: '/assets/cuadro1.jpg',
      description: 'Pintura',
      price: '25000',
      category: 'tinta',
      stock: 3,
    },
    {
      id: 2,
      name: 'Virgen del velo',
      img: './assets/cuadro2.jpg',
      description: 'Pintura',
      price: '25000',
      category: 'tinta',
      stock: 5,
    },
    {
      id: 3,
      name: 'Geometric Queen',
      img: './assets/cuadro3.jpg',
      description: 'Pintura',
      price: '35000',
      category: 'acrilico',
      stock: 2,
    },
    {
      id: 4,
      name: 'Vilipendia',
      img: './assets/cuadro4.jpg',
      description: 'Pintura',
      price: '20000',
      category: 'tinta',
      stock: 4,
    },
    {
      id: 5,
      name: 'El valle',
      img: './assets/digital5.jpg',
      description: 'Dibujo',
      price: '25000',
      category: 'digital',
      stock: 4,
    },
 
    
  ];

export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

export const getCategory = (category) =>{
  return new Promise((resolve) =>{
    setTimeout(() =>{
      resolve(products.filter((product) => product.category === category));
    }, 1000);
  });
};