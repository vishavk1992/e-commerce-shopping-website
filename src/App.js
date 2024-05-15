import './App.css';
import Home from './Component/Pages/Home';
import Product from './Component/Pages/Product';
import About from './Component/Pages/About';
import Categories from './Component/Pages/Categories';
import Contact from './Component/Pages/Contact';
import NoPage from './Component/Pages/NoPage';
import Cart from './Component/Pages/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Component/Section/NavBar';
import Footer from './Component/Section/Footer';
import Productdetail from './Component/Section/Productdetail';
import Wishlist from './Component/Pages/Wishlist';
import Login from "./Component/Pages/Login"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productdetail/:id" element={<Productdetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:catId" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
