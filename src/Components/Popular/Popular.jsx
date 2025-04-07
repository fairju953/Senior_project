import React from 'react';
import './Popular.css';
import Item from '../Item/Item';
import useProducts from '../../useProducts';

const Popular = () => {
  const products = useProducts();

  if (products.length === 0) {
    return <div className="popular"><h2>Loading products...</h2></div>;
  }

  return (
    <div className='popular'>
      <h1>POPULAR FOR STUDENTS</h1>
      <hr />
      <div className="popular-item">
        {products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
