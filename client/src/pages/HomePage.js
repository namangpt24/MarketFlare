import React, { useEffect, useState } from 'react'
import Layout from "./../components/layout/Layout.js"
import { useAuth } from '../context/auth.js'
import ProductCard from './ProductCard.js';
import axios from 'axios';

function HomePage() {
  const [products,setProducts] = useState([]);

  useEffect(()=>{
      const fetchProducts = async ()=>{

        try {
          const response = await axios.get("https://fakestoreapi.com/products")
          setProducts(response.data);
        } catch (error) {
          console.log(error);
        }
          
      }

      fetchProducts();
  },[])
  return (
    <Layout>
        <img src='/images/banner.png' style={{width:"100%"}}></img>
        <div className='product-list-container'>
          {products && products.map((singleproduct)=>(
            // {console.log(product)}
            <ProductCard key={singleproduct.id} product={singleproduct}></ProductCard>
          ))}
        </div>
    </Layout>
    
  )
}

export default HomePage