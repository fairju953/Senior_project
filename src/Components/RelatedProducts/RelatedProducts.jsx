import React from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item';
import useProducts from '../../useProducts';

const RelatedProducts = () => {
  const products = useProducts();

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {products.map((item, i) => (
          <Item
            key={i}
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

export default RelatedProducts;
