import React, { useContext, useState } from 'react'
import Context from './context/Context'
import './edit.css'

const Edit = ({ id, edit }) => {
    const context = useContext(Context)
    const { editDetails } = context;

    const [customerName, setCustomerName] = useState('')
    const [address, setAddress] = useState('')
    const [mNumber, setMNumber] = useState('')
    const [gender, setGender] = useState('default')
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')

    const submit = (e) => {
        e.preventDefault()
        if ((customerName !== '') && (address !== '') && (mNumber !== '') && (gender !== 'default') && (checkInDate !== '') && (checkOutDate !== '') && (mNumber.length === 10)) {
            editDetails({ customerName, address, mNumber, gender, checkInDate, checkOutDate, id })
            setCustomerName('')
            setAddress('')
            setMNumber('')
            setGender('default')
            setCheckInDate('')
            setCheckOutDate('')
            edit(false)
        }
    }

    return (
        <div className='container m-auto rounded edit'>

            <form className='d-flex flex-column' >

                <div className='d-flex justify-content-between'>
                    <label className='my-2 mx-2 text-dark edit-label' htmlFor="text">Name:</label>
                    <button className='btn text-danger' style={{ border: "none", fontSize:"25px" }}>&times;</button>
                </div>
                <input
                    className='edit-input text-dark'
                    type="text"
                    onChange={(e) => setCustomerName(e.target.value.toUpperCase())}
                    value={customerName} />

                <label className='my-2 mx-2 text-dark edit-label' htmlFor="text">Address:</label>
                <input
                    className='edit-input text-dark'
                    type="text"
                    onChange={(e) => setAddress(e.target.value.toUpperCase())}
                    name="address"
                    value={address} />

                <label className='my-2 mx-2 text-dark edit-label' htmlFor="text">Mob No:</label>
                <input
                    className='edit-input text-dark'
                    type="text"
                    onChange={(e) => setMNumber(e.target.value)}
                    value={mNumber} />
                <small className="text-danger">Mobile Number Must be Of 10 Digits</small>

                <label className='my-2 mx-2 text-dark edit-label' htmlFor="text">Gender:</label>
                <select className='edit-select' id="gender" onChange={(e) => setGender(e.target.value.toUpperCase())}>
                    <option >Select...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <label className='my-2 mx-2 text-dark edit-label' htmlFor="date">CheckInDate:</label>
                <input
                    className='edit-input text-dark'
                    type="date"
                    onChange={(e) => setCheckInDate(e.target.value)}
                    value={checkInDate} />

                <label className='my-2 mx-2 text-dark edit-label' htmlFor="date">CheckOutDate:</label>
                <input
                    className='edit-input text-dark'
                    type="date"
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    value={checkOutDate} />

            </form>

            <button
                type="button"
                className="btn btn-success my-2"
                style={{ width: '100%' }}
                onClick={submit}>Confirm</button>
        </div>
    )
}

export default Edit