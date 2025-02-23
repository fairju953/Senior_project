import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>
      <Link to={`/product/${product.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
