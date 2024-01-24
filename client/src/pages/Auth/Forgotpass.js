import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useAuth } from '../../context/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Forgotpass = () => {
    const [email,setEmail] = useState("");
    const [answer,setAnswer] = useState("");
    const [newpassword,setNewPassword] = useState("");
    const [auth,setAuth] = useAuth();
    const navigate = useNavigate();

    const Forgotpasshandler = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/forgot-password',{email,answer,newpassword});
            if(res.data.success)
            {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token
                })
                localStorage.setItem('auth',JSON.stringify(res.data))
                navigate("/login");
            }
            else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
       

    }

  return (
    <Layout>
        <div className='form-container'>
       <form onSubmit={Forgotpasshandler}>
       <h4 className='title'>Forgot Password</h4>
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
                type="text"
                value={answer}
                onChange={(e)=>{setAnswer(e.target.value)}}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="What's you Instagram password?"
                required
                />
            </div>

            <div className="mb-3">
                
                <input
                type="password"
                value={newpassword}
                onChange={(e)=>{setNewPassword(e.target.value)}}
                className="form-control"
                id="exampleInputPassword1"
                placeholder='Enter your new password'
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

export default Forgotpass