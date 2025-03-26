import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';

function CartWidget() {
  return (
    <div style={{ position: 'relative' }}>
      <FaShoppingCart size={30} />
      <Badge pill variant="danger" style={{ position: 'absolute', top: 5, right: 5 }}>
        3
      </Badge>
    </div>
  );
}

export default CartWidget;
