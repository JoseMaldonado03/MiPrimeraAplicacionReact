import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import './ItemList.css';
import { CartContext } from '../CartContext';

export default function ItemList() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(getProduct(id));
  }, []);

  const [cart, addItem, removeItem] = useContext(CartContext);

  return (
    <>
      <h1>Vista de Detalle de producto {id}</h1>
      <p>ID: {product?.id}</p>
      <h3>Nombre: {product?.name}</h3>
      <img className="card" src={product?.img} alt="" />
      <p>Descripcion: {product?.description}</p>
      <p>Categoria: {product?.category}</p>
      <p>Precio ${product?.price}</p>
      <button onClick={() => addItem(product)}>+</button>
      <button onClick={() => removeItem(product)}>-</button>
    </>
  );
}
