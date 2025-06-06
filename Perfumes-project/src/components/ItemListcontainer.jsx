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
      
      <div className='d-flex'>
  {products.map((prod, index) => (
    <div className="card" style={{width:"250px",justifyContent:'space-between'}}  key={`${prod.id}-${index}`}>
      <h3>{prod.name}</h3>
      <img src={prod.image} alt={prod.name} className='img figure-img img-fluid' />
      <Link className= "btn btn-primary"to={`/item/${prod.id}`}>Ver</Link>
    </div>
  ))}
</div>

          
        
        </div>
    
        
        
      
  
  );
}

export default ItemListContainer;