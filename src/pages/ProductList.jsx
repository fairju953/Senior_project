import { useEffect, useState } from "react";


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>
            {product.product_name} - ${product.price} ({product.category_name})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
