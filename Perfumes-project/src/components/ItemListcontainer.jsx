import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productsData from '../Data/Products';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const filtered = productsData.filter(p => p.category === categoryId);
      setProducts(filtered);
    } else {
      setProducts(productsData);
    }
  }, [categoryId]);

  return (
    <div>
      <h2>Catálogo</h2>
      {products.map(prod => (
        <div key={prod.id}>
          <h3>{prod.name}</h3>
          <img src={"/images/"+prod.image} alt="" />
          <Link to={`/item/${prod.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;