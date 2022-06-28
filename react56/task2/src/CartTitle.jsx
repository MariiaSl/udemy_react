import React from 'react';

const CartTitle = (props) => {
  const { userName, count } = props;
  return (
    <div className="cart-title">{`${userName}, you added ${count} items`}</div>
  );
};

export default CartTitle;
