import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
  const cartItems = 5; 

  return (
    <div className="cart-widget position-fixed bottom-0 end-0 p-3">
      <div className="bg-danger rounded-circle p-2">
        <FaShoppingCart size={30} className="text-white" />
        {cartItems > 0 && <span className="badge bg-light text-dark position-absolute top-0 start-100 translate-middle">{cartItems}</span>}
      </div>
    </div>
  );
}

export default CartWidget;


