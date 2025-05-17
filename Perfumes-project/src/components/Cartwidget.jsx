import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './cart';
function CartWidget() {
  const itemCount = 3;

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: '#f8f8f8',
      padding: '6px 12px',
      borderRadius: '20px',
      fontWeight: 'bold',
      // position: 'absolute',
      // top: '40px',
      // right: '20px',
      boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
      width:"70px"
      
    }
  };

  return (
  <Link to={"/cart"}><div style={styles.container}>
      <span role="img" aria-label="carrito" style={{ fontSize: '24px' }}>🛒</span>
      <span>{itemCount}</span>
    </div></Link>
   
  );
}



export default CartWidget;


