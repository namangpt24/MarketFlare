import React from 'react'
import Layout from '../components/layout/Layout'
import {BiMailSend, BiPhoneCall, BiSupport} from 'react-icons/bi'

function Contact() {
  return (
    <Layout>
        <div className='row contactus'>
          <div className='col-md-6'>
            <img src='/images/contact.jpeg' alt='Contact Us' style={{width:'100%'}}></img>
          </div>
          <div className='col-md-4'>
            <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
            <p className='text-justify mt-2'>In case of any query or feedback feel free to contact us anytime. We are 24x7 available.</p>
            <p className='mt-3'><BiMailSend/> : www.customerSupport@hiddenbrand.com</p>
            <p className='mt-3'><BiPhoneCall/> : 011-2549880</p>
            <p className='mt-3'><BiSupport/>: 1800-2134-0988(Toll Free)</p>
          </div>
        </div>
    </Layout>
    
  )
}

export default Contact