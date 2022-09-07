import React from 'react'

const DetailItem = ({ id, name, address, gender, number, inDate, outDate }) => {

    return (

        <>
            <div className='d-flex align-item-center justify-content-center my-1'>
                <h6>Id:</h6>
                <div className='mx-2' style={{ width: "15rem" }}>{id}</div>
            </div>
            <div className='d-flex align-item-center justify-content-center my-1'>
                <h6>Name:</h6>
                <div className='mx-2' style={{ width: "15rem" }}>{name}</div>
            </div>
            <div className='d-flex align-item-center justify-content-center my-1'>
                <h6>Gender:</h6>
                <div className='mx-2' style={{ width: "15rem" }}>{gender}</div>
            </div>
            <div className='d-flex align-item-center justify-content-center my-1'>
                <h6>MNo:</h6>
                <div className='mx-2' style={{ width: "15rem" }}>{number}</div>
            </div>
            <div className='d-flex align-item-center justify-content-center my-1'>
                <h6>Address:</h6>
                <div className='mx-2' style={{ width: "15rem" }}>{address}</div>
            </div>
            <div className='d-flex align-item-center justify-content-center my-1'>
                <h6>InDate:</h6>
                <div className='mx-2' style={{ width: "15rem" }}>{inDate}</div>
            </div>
            <div className='d-flex align-item-center justify-content-center my-1'>
                <h6>OutDate:</h6>
                <div className='mx-2' style={{ width: "15rem" }}>{outDate}</div>
            </div>
        </>
    )
}

export default DetailItem
