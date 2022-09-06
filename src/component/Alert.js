import React from 'react'

const Alert = ({ closeAlert }) => {

    // Alert close
    const close = (e) =>{
        e.preventDefault();
        closeAlert();
    }

    return (
        <div className="container alert alert-danger m-auto d-flex justify-content-around align-items-center" role="alert" style={{ width: "50%", position: "relative", top: '60px', height: '50px' }}>
            Invalid Data: Please Enter Valid Data
            <button
                className='btn btn-none text-danger'
                onClick={close}
                style={{ border: 'none', fontSize: '23px' }}>&times;</button>
        </div>
    )
}

export default Alert
