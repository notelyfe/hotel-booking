import React from 'react'

const AddConfirm = (addConfirm) => {

    const close = () => {
        let hidden = document.getElementById('addConfirm')
        hidden.click()
    }

  return (
    <div className='d-flex justify-content-around align-items-center rounded bg-success text-light' 
    style={{
        width: "50%",
        height: "65px",
        position: "absolute",
        top: "240px",
        left: "25%"
    }}>
      <h5>Customer Added Successfully</h5>
      <button onClick={close} className='btn text-light' style={{border: "none", fontSize:"20px"}}>&times;</button>
      <a id='addConfirm' hidden href="/">link</a>
    </div>
  )
}

export default AddConfirm
