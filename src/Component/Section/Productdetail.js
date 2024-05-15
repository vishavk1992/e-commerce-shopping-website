import React from 'react'
import '../CSS/productdetail.css'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../REDUX/features/CartSlice';
import { addToWishlist } from '../../REDUX/features/WishlistSlice';

const Productdetail = () => {

  const Service = [{ id: 1 ,name : "FREE SHIPPING" ,img :'http://localhost:3000/images/services/truck.png',  info:"Orders Over $99" },
    { id: 2 ,name : "FREE RETURNS" ,img :'http://localhost:3000/images/services/real-estate-business-house-on-a-hand.png', info:"Need Assistance?" },
    { id: 3 ,name : "24 x 7 SERVICE" ,img :'http://localhost:3000/images/services/24-hours.png', info:"Easy & Free" }]
 
  
  const [ data , setData] = useState([]);
  const {id} = useParams();
  console.log(id + "hello")

  const dispatch = useDispatch();
  const handleCart =(prod)=>{
    dispatch(addToCart(prod))
  }
  const handleWishList = (prod)=>{
    dispatch(addToWishlist(prod))
  }

  useEffect(()=>{
    const getItems= async()=>{
        const result = await axios.get("http://localhost:3000/productlist.json");
        const allItems = result.data;

        if(id){
        const categoryItems = allItems.filter(item => item.id === parseInt(id));
        setData(categoryItems)
    }
    }
    getItems()
},[id])

  
    return (
    <div className="container space">
      <div className='product-coln-3'>
      {
        data.map((item)=>
      
        <div className='row'>
          <div className='col-2'>
            <img src={item.image} width={"100%"} alt='laptop' />
            <div className='small-img-row'>
              <div className='small-img-col'>
                <img src={item.image}  alt='laptop' className='small-img' />
              </div>
              <div className='small-img-col'>
                <img src={item.image}  alt='laptop' className='small-img' />
              </div>
              <div className='small-img-col'>
                <img src={item.image}  alt='laptop' className='small-img' />
              </div>
              <div className='small-img-col'>
                <img src={item.image}  alt='laptop' className='small-img' />
              </div>
            </div>
          </div>
          <div className='col-2'>
            <h2>{item.title}</h2>
            <h4><del>$299</del> ${item.price}</h4>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            <h4>CATEGORY : {item.categoryId}</h4>
            <button  className="btn" type='submit'onClick={() => handleCart(item)}>ADD TO CART</button>
            <button  className="btn" type='submit' onClick={()=>handleWishList(item)}>WISHLIST</button>
          </div>
        </div>
        )}
        <div className='col-3'>
          <div className='product-services'>
            <div className='services-coln'>
            {Service.map((props)=>
            <div className="services-info">
              <img src={props.img} alt="service" />
              <h4>{props.name}</h4>
              </div>
            )}
            </div>
            <div className='offer'>
              <img src='http://localhost:3000/images/banner/offer.jpg' alt='sale'/>
            </div>           
          </div>          
        </div>
      </div>
    

    </div>
  )
}

export default Productdetail;