
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';
import electronics_banner from './Components/Assets/banner_electronics.png'
import supplies_banner from './Components/Assets/banner_supplies.png'
import textbooks_banner from './Components/Assets/banner_textbooks.png'

function App() {
  return (
    <div >
      <BrowserRouter>
    
     <Navbar />
     <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/textbooks' element={<ShopCategory banner={textbooks_banner} category="textbooks"/>} />
        <Route path='/electronics' element={<ShopCategory banner={electronics_banner} category="electronics"/>} />
        <Route path='/supplies' element={<ShopCategory banner={supplies_banner} category="supplies"/>} />
        <Route path ="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
