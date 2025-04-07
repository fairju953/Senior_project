import React from 'react';
import './Breadcrum.css';

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className='breadcrum'>
      HOME <img src="/assets/breadcrum_arrow.png" alt="" /> SHOP <img src="/assets/breadcrum_arrow.png" alt="" /> {product.category} <img src="/assets/breadcrum_arrow.png" alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
