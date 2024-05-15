import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import "../CSS/cart.css";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, decreaseCart, clearCart, getTotals } from '../../REDUX/features/CartSlice';

const Cart = () => {

  const { cart } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleRemoveCart = (prod) => {
    dispatch(removeFromCart(prod))
  }

  const handleCart = (prod) => {
    dispatch(addToCart(prod))
  }

  const handleDecreaseCart = (prod) => {
    dispatch(decreaseCart(prod))
  }
  const handleClearCart = (prod) => {
    dispatch(clearCart(prod))
  }

  return (
    <div className='container'>
      <h2 className='cart-name'>Shopping Cart</h2>
      {
        cart.cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
          </div>) : (
          <div>
            <div className='cart-title'>
              <div><h3>Title</h3></div>
              <div><h3>Price</h3></div>
              <div><h3>Quantity</h3></div>
              <div><h3>Total</h3></div>

            </div>
            <div className='cart-items'>
              {cart.cart.map(item =>
                <div className='cart-item'>
                  <div className='cart-product'>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h4>{item.title}</h4>
                    </div>
                    <div>
                      <button className="remove" onClick={() => handleRemoveCart(item)} >Remove</button>
                    </div>
                  </div>
                  <div className='cart-price'>${item.price}</div>
                  <div className='cart-quntity'>
                    <button className='minus' onClick={() => handleDecreaseCart(item)}>-</button>
                    <div className='count'>{item.cartQuantity}</div>
                    <button className='add' onClick={() => handleCart(item)}>+</button>
                  </div>
                  <div className='total-price'>
                    ${item.price * item.cartQuantity}
                  </div>
                </div>
              )}

            </div>
            <div className='summary'>
              <button onClick={() => handleClearCart()}>Clear Cart</button>
              <div className='checkout'>
                <div className='subtotal'>
                  <span>SubTotal</span>
                  <span className='amount'>${cart.cartTotalAmount}</span>
                </div>
                <p>Taxes and Shipping charges calculated at checkout</p>
                <button>checkout</button>
                <div className='continue'>
                  <Link to={`/`}><span>Continue Shopping---</span></Link>
                </div>
              </div>
            </div>
          </div>

        )
      }

    </div>
  )
}
export default Cart;