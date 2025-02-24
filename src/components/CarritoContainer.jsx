import { useContext, useReducer } from 'react';
import { CartContext } from '../CartContext';
import { enviarCompra } from '../firebase/firebase';

export default function CarritoContainer() {
  const [cart, addItem, removeItem, setCart] = useContext(CartContext);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  if (cart.length == 0) {
    return <p>Sin productos</p>;
  }

  return (
    <>
      <h1>Carrito: {cart.length}</h1>
      {cart.map((product, index) => (
        <div key={`carrito-container-${product?.id}-${index}`}>
          <p>ID: {product?.id}</p>
          <h3>Nombre: {product?.name}</h3>
          <img className="card" src={product?.img} alt="" />
          <p>Descripcion: {product?.description}</p>
          <p>Categoria: {product?.category}</p>
          <p>Precio ${product?.price}</p>
          <p>Cantidad: {product?.cantidad}</p>
          <button
            onClick={() => {
              forceUpdate();
              addItem(product);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              forceUpdate();
              removeItem(product);
            }}
          >
            -
          </button>
        </div>
      ))}
      <button
        onClick={() => {

          enviarCompra({
            items: cart,
            buyer: {
              email: 'jose@gmail.com',
              name: 'Jose',
              phone: '+5491100000000',
            },
            date: new Date(),
          });

          setCart([]);
        }
          
        }
      >
        Finalizar compra
      </button>
    </>
  );
}
