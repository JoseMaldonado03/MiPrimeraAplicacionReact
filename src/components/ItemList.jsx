import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../firebase/firebase';
import './ItemList.css';
import { CartContext } from '../CartContext';

export default function ItemList() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  console.log({ product });

  useEffect(() => {
    getProduct(id).then((datos) => setProduct(datos));
  }, []);

  const [_, addItem, removeItem] = useContext(CartContext);

  return (
    <>
      <h1>Vista de Detalle de producto {id}</h1>
      <p>ID: {product?.id}</p>
      <h3>Nombre: {product?.name}</h3>
      <img className="card" src={product?.img} alt="" />
      <p>Descripcion: {product?.description}</p>
      <p>Categoria: {product?.category}</p>
      <p>Precio ${product?.price}</p>
      <p>Stock {product?.stock}</p>
      <button onClick={() => addItem(product)}>+</button>
      <button onClick={() => removeItem(product)}>-</button>
    </>
  );
}
