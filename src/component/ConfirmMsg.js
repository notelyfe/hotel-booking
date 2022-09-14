import React from 'react'
import {Link} from 'react-router-dom'

const ConfirmMsg = () => {
  return (
    <div className='container d-flex'>
      <h2 className='text-center' style={{marginTop: "80px"}}> You have Successfully Checked Out... </h2>
      <Link className='text-center' to="/" style={{marginTop: "130px"}}>Go To Home</Link>
    </div>
  )
}

export default ConfirmMsg
