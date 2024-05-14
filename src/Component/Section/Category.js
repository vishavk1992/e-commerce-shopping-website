import React, { useState, useEffect } from 'react';
import '../CSS/category.css'
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';


const Category = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('category.json').then(response => { setData(response.data) })
            .catch(error => console.log(error))
    }, []);

    return (
        <section class="category-block space">
            <div class="container">
                <div className='title-block'>
                    <h2>SHOP BY CATEGORY</h2>
                </div>
                <div class="cat-list">
                    {
                        data.map((item) =>
                            <div class="cat-info">
                                <div class="cat-image">
                                    <img src={item.image} alt='category' />
                                </div>
                                <div class="cat-content">
                                    <Link to={`/categories/${item.id}`}><h4>{item.title}</h4></Link>
                                    <p>{item.number}PRODUCTS</p>
                                </div>
                            </div>
                        )}
                </div>
            </div>
            <Outlet/>
        </section>
    )
}

export default Category;