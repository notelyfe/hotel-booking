import React, { useContext, useState } from 'react'
import Context from './context/Context'

const CheckoutConfirm = ({ confirmState, id }) => {

  const context = useContext(Context)
  const { deleteDetails } = context

  const cancel = (e) => {
    e.preventDefault()
    confirmState()
  }

  const confirm = (e) => {
    e.preventDefault()
    confirmState()
    deleteDetails(id)
  }

  return (
    <div className='container rounded confirm text-light' style={{
      width: "50%",
      height: "80px",
      position: "fixed",
      top: "50%",
      right: "25%",
      zIndex: '1',
      // opacity: ".9",
      background: 'darkGreen'
    }}>
      <h6 className='my-2'>Please Click on Confirm Button to checkout</h6>
      <div className=" d-flex justify-content-end">
        <button type="button" className="btn btn-success mx-1" onClick={confirm}>Confirm</button>
        <button type="button" className="btn btn-danger mx-1" onClick={cancel}>Cancel</button>
      </div>
    </div>
  )
}

export default CheckoutConfirm
