import React from 'react'
import "../CSS/categories.css"
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../../REDUX/features/CartSlice';
import { addToWishlist } from '../../REDUX/features/WishlistSlice';


const Categories = () => {
  const [data , setData] = useState([]);
  const [catData, setcatData] = useState([]);
  const {catId} = useParams(); // Assuming you're using React Router and extracting the category parameter
  console.log(catId + "hello")

  const dispatch = useDispatch()
  const {cart} = useSelector(state=>state.cart)
  console.log(cart)

  const {Wishlist} = useSelector(state=>state)
  console.log(Wishlist)

  const handleCart = (prod)=>{
    dispatch(addToCart(prod))
  }
  const handleWishlist = (prod)=>{
    dispatch(addToWishlist(prod))
  }

const [priceRange, setPriceRange] = useState(300); //default value price range
const [filteredData, setFilteredData] = useState([]);

const  handlePriceChange =(e)=>{
setPriceRange(parseInt(e.target.value));
}

const filterProductsByPrice = () => {
  const filtered = data.filter(item => item.price <= priceRange);
  setFilteredData(filtered);
};

useEffect(()=>{
  const getItems =async()=>{
    try{
    const response = await axios.get("http://localhost:3000/productlist.json");
    setData(response.data);  // Assuming response.data is an array of products
    }
    catch(error){
      console.error(error)
    }

    if(catId){
      const categoryItems = data.filter((item)=>{
        return item.categoryId === catId
      })
      setFilteredData(categoryItems);
    }
    else{
      setFilteredData(data);  // If no category parameter, display all products
    }
  }
  getItems()
},[catId,data])

useEffect(() => {
  axios.get('category.json').then(response => { setcatData(response.data) })
      .catch(error => console.log(error))
}, []);


return (
  <section className='categories-block space'>
    <div className='container'>
      <div className='categories-col-2'>
        <div className='cat-sidebar'>
          <div className='widget'>
            <div className='widget-title'>
              <h3>CATEGORIES</h3>
            </div>
            <div className='widget-body'>
            {
              catData.map((cat)=>
              <div className='widget-list'>
              <Link to={`/categories/${cat.id}`}><span>{cat.title}
                  <span div className='product-count'>({cat.number})</span>
                </span></Link>
              </div>
              )
            }
            </div>
          </div>
          <div className='widget'>
            <div className='widget-title'>
              <h3>PRICE</h3>
            </div>
            <div className='widget-body'>
              <label>Price Range: ${priceRange}</label>
              <input className="input-group" type='range' min={0} max={300} value={priceRange} onChange={handlePriceChange} />             
            </div>
            <div>
            <button  className='btn' onClick={filterProductsByPrice}>Filter</button>
            </div>
          </div>
        </div>
        <div className='right-sidebar'>
          <div className='categories-banner'>
            <img src='http://localhost:3000/images/banner/banner-right-sidebar.jpg' alt='women' />
            <div className='banner-content'>
              <div className='banner-info'>
                <h2>Winter Fashion Trends</h2>
              </div>
              <div className='banner-info'>
                <h3>Get up to 30% off</h3>
              </div>
              <div className='banner-info'>
                <h4>On Jackets</h4>
              </div>
              <div className='banner-info'>
                <h5>STARTING At $199</h5>
              </div>
              <div className='banner-btn'>
                <button className="btn">SHOP NOW</button>
              </div>
            </div>
          </div>
          <div className='product-row space'>
            <div className='product-coln'>
            {
              filteredData.map((item)=>
              <div className='product-group'>
                <div className='product-image'>
                  <Link to={`/productdetail/${item.id}`}><img src={item.image} alt={item.title} />
                  <div className='product-layer'>
                    <h3>QUICK VIEW</h3>
                  </div></Link>
                </div>
                <div className='product-content'>
                  <span>{item.categoryId}</span>
                  <h3>{item.title}</h3>
                  <p>Price : ${item.price}</p>
                  <button  className="button"  onClick={()=>handleCart(item)}>Add to Cart</button>
                  <button  className="button"  onClick={()=>handleWishlist(item)}>WISHLIST</button>
                </div>   
              </div>
            )
            }
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
)
}

export default Categories;