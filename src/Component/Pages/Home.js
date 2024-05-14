import React from 'react'
import Banner from '../Section/Banner';
import Category from '../Section/Category';
import ServicesBlock from '../Section/Services/ServicesBlock';

const Home = () => {
  return (
    <div className='page-wrapper'>
    <Banner/>
    <Category/>
    <ServicesBlock/>  
    </div>
  )
}

export default Home;
