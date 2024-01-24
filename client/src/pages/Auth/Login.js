import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../styles/Authstyle.css";
import { useAuth } from '../../context/auth';

function Login() {
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const navigate = useNavigate();
const [auth,setAuth] = useAuth();

const LoginHandler =async (e)=>{
e.preventDefault();
try {
    const res = await axios.post('http://localhost:8080/api/v1/auth/login',{email,password}) 
    if(res.data.success)
    {
        toast.success('Welcome to the App');
        setAuth({
            ...auth,
            user:res.data.user,
            token:res.data.token
        })
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate('/');
    }
    else{
        toast.error(res.data.message);
    }
} catch (error) {
    console.log(error);
    toast.error('Something went wrong')
}


}

  return (
<Layout>

    <div className='form-container'>
       <form onSubmit={LoginHandler}>
       <h4 className='title'>Login</h4>
            <div className="mb-3">
                <input
                type="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                className="form-control"
                id="exampleInputEmail1"
                placeholder='Enter your email'
                required
                />
                
            </div>
            <div className="mb-3">
                
                <input
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className="form-control"
                id="exampleInputPassword1"
                placeholder='Enter your password'
                required
                />
            </div>
            
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            <div>
            <button type="submit" className="btn btn-primary" onClick={()=>{navigate("/forgot-password")}}>
                Forgot password
            </button>
            </div>
            </form>


    </div>
    </Layout>
  )
}

export default Login