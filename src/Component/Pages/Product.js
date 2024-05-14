import React from 'react'
import '../CSS/productdetail.css'
import { useEffect , useState } from 'react'
import axios from "axios";
import { addToCart } from '../../REDUX/features/CartSlice';
import {useDispatch, useSelector } from 'react-redux';

const Product = () => {

  const dispatch = useDispatch()
  const {cart}= useSelector(state=>state.cart)
  console.log(cart)

  const handleCart =(prod)=>{
    dispatch(addToCart(prod))
  }
 
  const Service = [{ id: 1 ,name : "FREE SHIPPING" ,img :'http://localhost:3000/images/services/truck.png',  info:"Orders Over $99" },
    { id: 2 ,name : "FREE RETURNS" ,img :'http://localhost:3000/images/services/real-estate-business-house-on-a-hand.png', info:"Need Assistance?" },
    { id: 3 ,name : "24 x 7 SERVICE" ,img :'http://localhost:3000/images/services/24-hours.png', info:"Easy & Free" }]
 
  
  const [ data , setData] = useState([]);
  const [searchData ,setSearchdata] = useState([])

    useEffect(()=>{
    axios.get("http://localhost:3000/productlist.json")
    .then(response =>{ setData(response.data);
      setSearchdata(response.data);
      console.log(response.data)})

    .catch((error)=> console.log(error))
},[]);

   const handleSearchFilter =(value)=>{
    const result = searchData.filter((item)=>item.title.toLowerCase().includes(value.toLowerCase()))
    setData(result);
    if(value === ""){
      setData([]);
  }
   }


  return (
    <div className="container space">
    <div className='search-bar'>
    <label>Search : </label>
      <input type='text' placeholder='Search Product Here.........'  onChange={(e)=>handleSearchFilter(e.target.value)}/>
    </div>
     {
        data.map((item)=>
      <div className='product-coln-3'>
     
      
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
            <h4>Price : <del>$299</del> ${item.price}</h4>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            <h4>Category : {item.categoryId}</h4>
            
            <button  className="btn" onClick={()=>handleCart(item)}>ADD TO CART</button>
           
            <button  className="btn" type='submit'>WISHLIST</button>
          </div>
          
        </div>
      
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
    
      )}
    </div>
  )
}


export default Product;