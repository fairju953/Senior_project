import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Contact from './pages/Contact';
import { CartProvider } from './context/CartContext';
import './App.css';
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="pt-16"> {/* Prevents content from being hidden under the navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
