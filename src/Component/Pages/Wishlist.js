import React from 'react'
import { Link } from 'react-router-dom';
import "../CSS/cart.css";
import { useSelector , useDispatch } from 'react-redux';
import { removeFromWishlist , clearWishlist} from '../../REDUX/features/WishlistSlice';
import { addToCart } from '../../REDUX/features/CartSlice';


const Wishlist = () => {

  const reducer2 = useSelector(state=>state.reducer2)
  console.log(reducer2)
  const dispatch = useDispatch()

  const handleRemoveWishlist =(prod)=>{
    dispatch(removeFromWishlist(prod))
  }

  const handleAddtoCart =(prod)=>{
    dispatch(addToCart(prod))
    dispatch(removeFromWishlist(prod))
  }
   
  const handleClearWishlist =(prod)=>{
    dispatch(clearWishlist(prod))
  }

  return (
      <div className='container'>
        <h2>WISHLIST</h2>
        {
          reducer2.wishlist.length === 0 ? (
          <div className="empty-cart">
            <p>Your Wishlist is empty</p>
          </div>) :(
          <div>
            <div className='cart-title'><div>
              <h3>Title</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Total</h3>
            </div>
              <div className='cart-items'>
                {reducer2.wishlist.map(item=>
                  <div className='cart-item'>
                    <div className='cart-product'>
                      <img src={item.image} alt={item.title}/>
                      <div>
                        <h4>{item.title}</h4>
                      </div>
                      <div>
                        <button className="remove" onClick={()=>handleRemoveWishlist(item)} >Remove</button>
                      </div>
                    </div>
                    <div className='cart-price'>${item.price}</div>
                    <button onClick={()=>handleAddtoCart(item)}>ADD TO CART</button>
                  </div>
                  )}
         
              </div>
              <div className='summary'>
                <button onClick={()=>handleClearWishlist()}>Clear Wishlist</button>
                  <div>
                    <Link to={`/`}><span>Continue Shopping---</span></Link>
                  </div>
              </div>
            </div>
          </div>
          )}
     
      </div>
      )
}
      export default Wishlist;