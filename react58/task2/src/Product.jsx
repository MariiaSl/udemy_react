import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();
  return (
    <div className="page__content">
      {/* {`Product is a ${match.params.productId}`} */}
      {`Product is a ${productId}`}
    </div>
  );
}

export default Product;
