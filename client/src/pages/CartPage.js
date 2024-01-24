import React from 'react'
import Layout from '../components/layout/Layout'
import { useAuth } from '../context/auth'
import { useCart } from '../context/cart';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function CartPage() {
    const [auth,setAuth] = useAuth();
    const [cart,setCart] = useCart();
    const navigate = useNavigate();

    const TotalAmount = ()=>{
        let total=0;
        cart?.map((item)=>{total=total+item.price});
        return total.toLocaleString("en-US",{
            style:"currency",
            currency:"USD"
        })
    }

  return (
    <Layout>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='text-center bg-light p-2 mb-1'>
                        {`Hello ${auth?.token && auth?.user?.name}`}
                    </h1>
                    <h4 className='text-center mb-5'>
                        {`Your cart has ${cart?.length} number of items`}
                    </h4>
                </div>
                
            </div>
            <div className='row'>
                    <div className='col-md-8'>
                        {cart?.map((product)=>(
                            <div className='row card flex-row mb-2 p-2'>
                                <div className='col-md-4'>
                                    <img
                                     src={product.image}
                                     alt={product.title}
                                     className='product-image'
                                    ></img>
                                </div>
                                <div className='col-md-8'>
                                    <h4>{product.title}</h4>
                                    <p style={{textOverflow:"ellipsis"}}>{product.description.substr(0,400)}</p>
                                    <h4>${product.price}</h4>
                                    <button className='btn btn-danger mt-2' onClick={()=>{
                                        const upcart = [...cart];
                                        const index = upcart.findIndex(item=>item.id===product.id);
                                        upcart.splice(index,1);
                                        setCart(upcart);
                                        localStorage.setItem('cart',JSON.stringify(upcart));
                                        // const updatedCart = cart.filter((item)=>(item.id!==product.id))
                                        // setCart(updatedCart);
                                    }}>Remove from Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='col-md-4 text-center p-2'>
                        <h3>Cart Summary</h3>
                        <p>Total | Checkout</p>
                        <hr/>
                        <h4>Total : {TotalAmount()}</h4>
                        <button className='btn btn-outline-success mt-2' onClick={cart.length?()=>{
                            toast.success("Thankyou for shopping with us!")
                            navigate("/");
                            setCart([]);
                            localStorage.removeItem("cart");
                        }:()=>{toast.error("Please add items to the cart")}}>Checkout</button>
                    </div>
                </div>
        </div>
    </Layout>
  )
}

export default CartPage