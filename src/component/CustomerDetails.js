import React from 'react'

const CustomerDetails = () => {
    return (
        <div className='container' style={{width:'80%'}}>
            <h2 className='text-center'>Customer Details</h2>
            <div className="container rounded" style={{border:"2px solid black"}}>
                <div className="container d-flex" style={{height:"50px", justifyContent:'center', alignItems:"center"}}>
                    <h5>Name :</h5>
                    <div className="container my-1" style={{ width:"70%",fontSize:"20px"}}></div>
                </div>
                <div className="container d-flex" style={{height:"50px", justifyContent:'center', alignItems:"center"}}>
                    <h5>Gender :</h5>
                    <div className="container my-1" style={{ width:"70%",fontSize:"20px"}}></div>
                </div>
                <div className="container d-flex" style={{height:"50px", justifyContent:'center', alignItems:"center"}}>
                    <h5>Email :</h5>
                    <div className="container my-1" style={{ width:"70%",fontSize:"20px"}}></div>
                </div>
                <div className="container d-flex" style={{height:"50px", justifyContent:'center', alignItems:"center"}}>
                    <h5>Mobile No. :</h5>
                    <div className="container my-1" style={{ width:"70%",fontSize:"20px"}}></div>
                </div>
                <div className="container d-flex" style={{height:"50px", justifyContent:'center', alignItems:"center"}}>
                    <h5>Address:</h5>
                    <div className="container my-1" style={{ width:"70%",fontSize:"20px"}}></div>
                </div>
            </div>
            <div className="container d-flex rounded my-3" style={{border:'2px solid black', height:"50px", justifyContent:'center', alignItems:"center"}}>
                <h5>Amount:</h5>
                <div className="container my-1 text-success" style={{ width:"70%",fontSize:"20px"}}>₹1000</div>
            </div>
        </div>
    )
}

export default CustomerDetails
