import React, { useContext, useState } from 'react'
import Context from './context/Context'

const DetailItem = ({ id, name, address, gender, number, inDate, outDate, edit }) => {

    const context = useContext(Context)
    const { deleteDetails } = context;

    const infoDetete = (e) =>{
        e.preventDefault()
        deleteDetails(id)
    }

    const infoEdit =(e) => {
        e.preventDefault()
        setEditDiv(true)
        edit(editDiv,id)
    }
    const [editDiv, setEditDiv] = useState()

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
            <div className="m-auto d-flex justify-content-center my-1" style={{width:'100%'}}>
                <button 
                type="button" 
                className="btn btn-outline-primary mx-1"
                onClick={infoEdit}
                >Edit
                </button>
                <button 
                type="button" 
                className="btn btn-outline-danger mx-1"
                onClick={infoDetete}>Delete
                </button>
            </div>
        </>
    )
}

export default DetailItem
