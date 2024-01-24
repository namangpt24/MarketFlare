import React from 'react'
import { useCart } from '../context/cart';
import { toast } from 'react-toastify';

const ProductCard = ({product})=>{
    console.log(product);
    const [cart,setCart] = useCart();


  return (
    <div className='product-card'>
        <img 
        src={product.image}
        alt={product.title}
        className='product-image'
        ></img>
        {/* <div className='content'> */}
        <h3 className='product-title'>{product.title}</h3>
        <p className='product-description'>{product.description}</p>
        <p className='product-price'>${product.price}</p>
        {/* </div> */}
        <div className='priceandcart'>
        
        <button className="add-to-cart-button" onClick={()=>{
          setCart([...cart,product])
          localStorage.setItem(
            "cart",
            JSON.stringify([...cart, product])
          );
          toast.success("Item is added to the cart");
        }}>Add to Cart</button>
        </div>
        
    </div>
  )
}

export default ProductCard