import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { useParams } from 'react-router-dom';
import { getProducts, getCategory } from '../firebase/firebase';

export default function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!catId) {
      getProducts().then((response) => {
        setProducts(response);
        setLoading(false);
      });
    } else {
      getCategory(catId).then((response) => {
        setProducts(response);
        setLoading(false);
      });
    }
  }, [catId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <h1>Home {catId}</h1>
      {products?.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </>
  );
}
