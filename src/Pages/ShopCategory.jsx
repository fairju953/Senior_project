import React, { useContext, useState, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import { useLocation } from 'react-router-dom';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const location = useLocation();

  useEffect(() => {
    setVisibleCount(6); // Reset visible count when category changes
    setSortOption('');  // Reset sort
  }, [location.pathname]);

  if (!Array.isArray(all_product)) {
    return <div className='shop-category'>Loading products...</div>;
  }

  const filtered = all_product.filter(item => item.category === props.category);

  const sortedProducts = [...filtered].sort((a, b) => {
    if (sortOption === 'price-low-high') return a.new_price - b.new_price;
    if (sortOption === 'price-high-low') return b.new_price - a.new_price;
    if (sortOption === 'name') return a.name.localeCompare(b.name);
    if (sortOption === 'rating') return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

  const visibleItems = sortedProducts.slice(0, visibleCount);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />

      <div className="shopcategory-indexSort">
        <p>Showing {visibleItems.length} of {filtered.length} products</p>
        <select
          className="shopcategory-sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="name">Name: A-Z</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className='shopcategory-products'>
        {visibleItems.map((item, i) => (
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

      {visibleCount < sortedProducts.length && (
        <div
          className="shopcategory-loadmore"
          onClick={() => setVisibleCount(prev => prev + 6)}
        >
          Explore More
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
