import React, { useContext } from 'react';
import { CartContext } from './context/CartContext'; 

function Cart() {
  const { cart, removeItem, clear, totalProductos, sumaProductos, decrementarItem, aumentarItem } = useContext(CartContext);

  if (cart.length === 0) {
    return <p>Tu carrito está vacío.</p>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ borderBottom: '1px solid #eee', padding: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <div style={{ flexGrow: 1 }}>
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.price}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
            <div>
              <button onClick={() => decrementarItem(item.id)} style={{ margin: '5px' }}>-</button>
              <button onClick={() => aumentarItem(item.id, item.stock || 10)} style={{ margin: '5px' }}>+</button>
              <button onClick={() => removeItem(item.id)} style={{ margin: '5px', backgroundColor: '#f44336', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <div style={{ textAlign: 'right', marginBottom: '15px' }}>
        <p>Total de productos: {totalProductos()}</p>
        <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Total a pagar: ${sumaProductos()}</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={clear} style={{ backgroundColor: '#008CBA', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', fontSize: '1em' }}>Vaciar Carrito</button>
       <button style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', fontSize: '1em' }}>Finalizar Compra</button>
      </div>
    </div>
  );
}

export default Cart;