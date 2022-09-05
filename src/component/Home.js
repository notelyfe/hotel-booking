import React, { useContext, useState } from 'react'
import Context from './context/Context'

const Home = () => {

    const context = useContext(Context)
    const { addCustomerDetails } = context;

    const [customerName, setCustomerName] = useState('')
    const [address, setAddress] = useState('')
    const [mNumber, setMNumber] = useState('')
    const [gender, setGender] = useState('')
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')

    const handelClick = (e) => {
        e.preventDefault()
        addCustomerDetails(customerName, address, mNumber, gender, checkInDate, checkOutDate)
        setCustomerName('')
        setAddress('')
        setMNumber('')
        setGender('')
        setCheckInDate('')
        setCheckOutDate('')
    }

    return (
        <div className="container" style={{ width: "60%", marginTop: "60px" }}>
            <h2 className='text-center'>Customer Details</h2>

            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="customerName"
                        aria-describedby="name"
                        onChange={(e) => setCustomerName(e.target.value)}
                        value={customerName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e)=> setAddress(e.target.value)}
                        name="address"
                        value={address} />
                </div>
                <div className="mb-3">
                    <label htmlFor="mNumber" className="form-label">Mobile Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="mNumber"
                        name="mNumber"
                        onChange={(e)=>setMNumber(e.target.value)}
                        value={mNumber} />
                </div>
                <div className="mb-3">
                    <label htmlFor="mNumber" className="form-label">Select Gender</label>
                    <select className="form-select" aria-label="Default select example" name="gender" onChange={(e)=> setGender(e.target.value)}>
                        <option >Select...</option>
                        <option value="Male" >Male</option>
                        <option value="Female" >Female</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="mNumber" className="form-label">CheckIn Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="checkInDate"
                        name="checkInDate"
                        onChange={(e)=> setCheckInDate(e.target.value)}
                        value={checkInDate} />
                </div>
                <div className="mb-3">
                    <label htmlFor="mNumber" className="form-label">CheckOut Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="checkOutDate"
                        name="checkOutDate"
                        onChange={(e)=> setCheckOutDate(e.target.value)}
                        value={checkOutDate} />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handelClick}>Submit</button>

            </form>

        </div>
    )
}

export default Home