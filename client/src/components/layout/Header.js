import React from 'react'
import {NavLink,Link} from "react-router-dom"
import { useAuth } from '../../context/auth'
import {toast } from 'react-toastify';
import { useCart } from '../../context/cart';
import {Badge} from "antd"

function Header() {
  const [auth,setAuth] = useAuth();
  const [cart] = useCart();
  const handleLogout = ()=>{
    setAuth({
      ...auth,
      user:null,
      token:""
    })
    localStorage.removeItem('auth');
    toast.success("Logout Successfully")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className="navbar-brand">
        MarketFlare
      </Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" >
            Home
          </NavLink>
        </li>
        
        {
          !auth.user ? (<>
              <li className="nav-item">
              <NavLink to="/Register" className="nav-link" href="#">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Login" className="nav-link" href="#">
                Login
              </NavLink>
            </li>
          </>):(<>
            <li className="nav-item">
              <NavLink onClick={handleLogout} to="/Login" className="nav-link" href="#">
                Logout
              </NavLink>
            </li>
          </>)
        }
        <li className="nav-item">
        <Badge count={cart?.length}>
          <NavLink to="/cart" className="nav-link" href="#">
              <h6>Cart</h6>
            </NavLink>
        </Badge>
          
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Header