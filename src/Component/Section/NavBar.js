import React from 'react'
import '../CSS/Navbar.css'
import { Link, Outlet } from 'react-router-dom';
import { FaHeart, FaSearch, FaUser, FaCartPlus } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const NavBar = () => {

  const { cart } = useSelector(state => state)
  console.log(cart)

  const { reducer2 } = useSelector(state => state)
  console.log(reducer2)

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) { // You can adjust the scroll position to trigger the sticky header
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <header className={isSticky ? "sticky" : " "}>
      <div class="top-row">
        <div class="logo">
          <img src="images/logo-black.png" alt="logo" />
        </div>
        <div class="nav-bar">
          <ul>
            <li ><Link to="/">Home</Link></li>
            <li><Link to="/product">Product </Link></li>
            <li><Link to="/categories">Categories </Link></li>
            <li><Link to="/about">About Us </Link></li>
            <li><Link to="/contact">Contact Us </Link></li>
          </ul>
        </div>
        <div class="icon">
          <ul>
            <li><Link to={`/wishlist`}><FaHeart />{reducer2.wishlist.length}</Link></li>
            <li><Link to=""><FaUser /></Link></li>
            <li><Link to=""><FaSearch /></Link></li>
            <li><Link to={`/cart`}><FaCartPlus />{cart.cart.length}</Link></li>
          </ul>
        </div>
      </div>
      <Outlet />
    </header>

  )
}

export default NavBar;