import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';//for notification of registration successful
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import "../../styles/Authstyle.css";

function Register() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const [answer,setAnswer]=useState("");
    const navigate=useNavigate();

    const handleRegister= async (e)=>{
        e.preventDefault();
        console.log(name,email,password,phone,address,answer);
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/register',{name,email,password,phone,address,answer})
            if(res.data.success)
            {
                toast.success(res.data.message)
                navigate("/login")
            }
            else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    }

  return (

    <Layout>
    <div className='form-container'>
        <form onSubmit={handleRegister}>
        <h4 className='title'>User Registration</h4>
            <div className="mb-3">
                <input
                type="text"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                className="form-control"
                id="exampleInputEmail1"
                placeholder='Enter Your Name'
                required
                />
                
            </div>
            <div className="mb-3">
                <input
                type="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                className="form-control"
                id="exampleInputEmail1"
                placeholder='Enter Your Email id'
                required
                />
                
            </div>
            <div className="mb-3">
                <input
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className="form-control"
                id="exampleInputEmail1"
                placeholder='Enter Your Password'
                required
                />
                
            </div>
            <div className="mb-3">
                <input
                type="text"
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
                className="form-control"
                id="exampleInputEmail1"
                placeholder='Enter Your Phone no.'
                required
                />
                
            </div>
            <div className="mb-3">
                <input
                type="text"
                value={address}
                onChange={(e)=>{setAddress(e.target.value)}}
                className="form-control"
                id="exampleInputEmail1"
                placeholder='Enter Your Address'
                required
                />
                
            </div>
            <div className="mb-3">
                <input
                type="text"
                value={answer}
                onChange={(e)=>{setAnswer(e.target.value)}}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="What's your Instagram password?"
                required
                />
                
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
</form>

    </div>
    </Layout>
  )
}

export default Register