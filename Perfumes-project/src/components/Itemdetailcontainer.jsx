import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import productsData from '../Data/Products';
import { CartContext } from '../components/context/CartContext';

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const found = productsData.find(p => p.id == id);
    console.log("Producto encontrado:", found); // Para verificar que el producto se carga
    setProduct(found);
  }, [id]);

  if (!product) return <p>Producto no encontrado</p>;

  const handleAddToCart = () => {
    console.log("Producto a agregar:", product);
    console.log("Cantidad a agregar:", quantity);
    addItem(product, quantity);
    console.log(`Producto "${product.name}" agregado al carrito con cantidad: ${quantity}`);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= (product.stock || 10)) {
      setQuantity(value);
    }
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className='img figure-img img-fluid' />
      <p>{product.Description}</p>
      <button onClick={handleAddToCart} className='btn btn-primary mt-2'>Agregar al carrito</button>
      {/* <p>Categoría: {product.category}</p> */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="quantity">Cantidad:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          min="1"
          max={product.stock || 10}
          onChange={handleQuantityChange}
          style={{ width: '60px', marginLeft: '8px' }}
        />
        <span style={{ marginLeft: '8px' }}>(Stock: {product.stock || 10})</span>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
// function ItemDetailContainer() {
//     const { id } = useParams();
//     const [product, setProduct] = useState({});
//      const [quantity, setQuantity] = useState(1);
//     const { addItem } = useContext(CartContext);

//     useEffect(() => {
//       const found = productsData.find(p => p.id == id);
//       console.log (found)
//       setProduct(found);
//     }, [id]);
  
//     if (!product) return <p>Producto no encontrado</p>;
//    const HandleQuantityChange = (e) => {
//     const value = parseInt(e.target.value);
//     if (value >= 1 && value <= product.stock || 10) {
//       setQuantity(value);
//     }
//   };


//     return (
//       <div>
//         <h2>{product.name}</h2>
//         <img src={product.image} alt={product.name} className='img figure-img img-fluid' />
//         <p>{product.Description}</p>
//          <button onClick={HandleAddToCart} className='btn btn-primary mt-2'>Agregar al carrito</button>
//         {/* <p>Categoría: {product.category}</p> */}
//         <div style={{ marginBottom: '1rem' }}>
//         <label htmlFor="quantity">Cantidad:</label>
//         <input
//           type="number"
//           id="quantity"
//           value={quantity}
//           min="1"
//           max={product.stock || 10}
//           onChange={handleQuantityChange}
//           style={{ width: '60px', marginLeft: '8px' }}
//         />
//         <span style={{ marginLeft: '8px' }}>(Stock: {product.stock || 10})</span>
//       </div>
//       </div>
//     );
//   }
  
//   export default ItemDetailContainer;