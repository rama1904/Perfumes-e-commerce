import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productsData from '../Data/Products';

function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const found = productsData.find(p => p.id === id);
      setProduct(found);
    }, [id]);
  
    if (!product) return <p></p>;
  
    return (
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Categoría: {product.category}</p>
      </div>
    );
  }
  
  export default ItemDetailContainer;