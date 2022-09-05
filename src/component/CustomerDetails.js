import React from 'react'

const CustomerDetails = ({ propDetail }) => {

    return (

        <>
            <div className="container rounded" style={{ border: "2px solid black" }}>
                <div className="container d-flex" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>Name :</h5>
                    <div className="container my-1" style={{ width: "70%", fontSize: "20px" }}>{propDetail.name}</div>
                </div>
                <div className="container d-flex" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>Gender :</h5>
                    <div className="container my-1" style={{ width: "70%", fontSize: "20px" }}>{propDetail.gender}</div>
                </div>
                <div className="container d-flex" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>Address :</h5>
                    <div className="container my-1" style={{ width: "70%", fontSize: "20px" }}>{propDetail.address}</div>
                </div>
                <div className="container d-flex" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>Mobile No. :</h5>
                    <div className="container my-1" style={{ width: "70%", fontSize: "20px" }}>{propDetail.mNumber}</div>
                </div>
                <div className="container d-flex" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>CheckIn Date :</h5>
                    <div className="container my-1" style={{ width: "70%", fontSize: "20px" }}>{propDetail.checkInDate}</div>
                </div>
                <div className="container d-flex" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>CheckOut Date :</h5>
                    <div className="container my-1" style={{ width: "70%", fontSize: "20px" }}>{propDetail.checkOutDate}</div>
                </div>
                <div className="container d-flex" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>Day Stayed :</h5>
                    <div className="container my-1" style={{ width: "70%", fontSize: "20px" }}>5</div>
                </div>
                <div className="container d-flex" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>Rate/Day :</h5>
                    <div className="container my-1" style={{ width: "70%", fontSize: "20px", color: "red" }}>₹1000 (Fixed Charge)</div>
                </div>
            </div>
            <div className="container d-flex rounded my-3" style={{ border: '2px solid black', height: "50px", justifyContent: 'center', alignItems: "center" }}>
                <h5 style={{ width: '30%',paddingLeft:'15px' }}>Amount:</h5>
                <div className="container my-1 text-success" style={{ width: "70%", fontSize: "20px" }}>₹1000</div>
            </div>
        </>
    )
}

export default CustomerDetails
