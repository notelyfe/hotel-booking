import React, { useState } from 'react'

const CustomerDetails = ({ propDetail }) => {

    const [noOfDays, setNoOfDays] = useState()
    // eslint-disable-next-line
    const [inDate, setInDate] = useState(propDetail.checkInDate)
    // eslint-disable-next-line
    const [outDate, setOutDate] = useState(propDetail.checkOutDate)

    const calcDays =  (inDate, outDate) =>{
        const date1 = new Date(inDate)
        const date2 = new Date(outDate)

        const oneDay = 1000*60*60*24;

        const diffInTime = date2.getTime() - date1.getTime();

        const days =  Math.round(diffInTime / oneDay);

        return days
    }
    
    const getDate = async () => {
        const num = await calcDays( inDate, outDate);
        setNoOfDays(num)
    }
    getDate();

    const [amount, setAmount] = useState()
    const calcAmount = (noOfDays) =>{
        const amt = noOfDays*1000;

        return amt
    }
    
    const getAmount = async () =>{
        const amt = await calcAmount(noOfDays)
        setAmount(amt)
    }
    getAmount();

    return (

        <>
            <div className="container rounded" style={{ border: "2px solid black" }}>
                <div className="container d-flex details " style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>Name :</h5>
                    <div className=" my-1 info-div" style={{ width: "70%", fontSize: "20px" }}>{propDetail.customerName}</div>
                </div>
                <div className="container d-flex details" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>Gender :</h5>
                    <div className=" my-1 info-div" style={{ width: "70%", fontSize: "20px" }}>{propDetail.gender}</div>
                </div>
                <div className="container d-flex details" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>Address :</h5>
                    <div className=" my-1 info-div" style={{ width: "70%", fontSize: "20px" }}>{propDetail.address}</div>
                </div>
                <div className="container d-flex details" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>Mobile No :</h5>
                    <div className=" my-1 info-div" style={{ width: "70%", fontSize: "20px" }}>{propDetail.mNumber}</div>
                </div>
                <div className="container d-flex details" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>CheckIn Date :</h5>
                    <div className=" my-1 info-div" style={{ width: "70%", fontSize: "20px" }}>{propDetail.checkInDate}</div>
                </div>
                <div className="container d-flex details" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>CheckOut Date :</h5>
                    <div className=" my-1 info-div" style={{ width: "70%", fontSize: "20px" }}>{propDetail.checkOutDate}</div>
                </div>
                <div className="container d-flex details" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>Day Stayed :</h5>
                    <div className=" my-1 info-div" style={{ width: "70%", fontSize: "20px" }}>{noOfDays}</div>
                </div>
                <div className="container d-flex details" style={{ height: "50px", justifyContent: 'center', alignItems: "center" }}>
                    <h5 className='mx-1' style={{ width: '30%' }}>Rate/Day :</h5>
                    <div className=" my-1 info-div" style={{ width: "70%", fontSize: "20px", color: "red" }}>₹1000 (Fixed Charge)</div>
                </div>
            </div>
            <div className="container d-flex details amt-detail rounded my-3" style={{ border: '2px solid black', height: "50px", justifyContent: 'center', alignItems: "center", margin:'auto' }}>
                <h5 className='mx-1' style={{ width: '30%',paddingLeft:'15px' }}>Amount:</h5>
                <div className=" my-1 info-div text-success" style={{ width: "70%", fontSize: "20px"}}>₹{amount}</div>
            </div>
        </>
    )
}

export default CustomerDetails