import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
        <h5 className="text-center" style={{fontSize:"20px"}}>All rights reserved &copy; Techshop</h5>
        <p className='text-center mt-3'>
          <Link to="/About">About</Link>|
          <Link to="/Contact">Contact Us</Link>|
          <Link to="/Policy">Privacy Policy</Link>
        </p>
    </div>

  )
}

export default Footer