import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <Layout>
        <div className='pnf'>
           <h1 className='pnf-title'>404</h1>
           <h3 className='pnf-heading'>OOPS! Page Not Found</h3>
           <Link to='/'><button className='pnf-bt'>Go Back</button></Link>
        </div>
    </Layout>
  )
}

export default PageNotFound