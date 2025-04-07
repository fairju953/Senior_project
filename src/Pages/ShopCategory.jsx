import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  if (!Array.isArray(all_product)) {
    return <div className='shop-category'>Loading products...</div>;
  }

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
      <p>
        Showing {all_product.filter(item => item.category === props.category).length} products
      </p>

        <div className="shopcategory-sort">
          Sort by <img src="/assets/dropdown_icon.png" alt="" />
        </div>
      </div>

      <div className='shopcategory-products'>
        {all_product
          .filter(item => item.category === props.category)
          .map((item, i) => (
            <div className="product-card" key={i}>
              <Item
                id={item.id}
                name={item.name}
                category={item.category}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          ))}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
