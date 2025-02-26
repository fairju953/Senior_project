import { useParams, Link } from "react-router-dom";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";


const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-2xl mt-8">Product not found</h2>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-cover rounded shadow-md"
        />

        {/* Product Info */}
        <div className="flex flex-col gap-4">
          <p className="text-gray-600">{product.description}</p>
          <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
          <button
            className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow-md transition"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          {/* View More Products Link */}
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
