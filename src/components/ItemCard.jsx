import { Link } from 'react-router-dom';
import './ItemCard.css'

export default function ItemCard ({product}) {
    return (
    <>
    <article style={{border: '1px solid black', padding: 10}}>
        <h3>
          {product.name} - {product.id}
        </h3>
        <img className="pint" src={product.img} alt={product.name} />
        <p>${product.price}</p>
        <button>
          <Link to={`/product/${product.id}`}>
            Mas detalles
          </Link>
        </button>
    </article>
    </>
    );
}