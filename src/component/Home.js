import React, { useContext, useState } from 'react'
import Context from './context/Context'

const Home = () => {

    const context = useContext(Context)
    const { addCustomerDetails } = context;

    const [detail, setDetail] = useState({
        customerName: "",
        address: "",
        mNumber: "",
        gender: "",
        checkInDate: "",
        checkOutDate: ""
    })

    const handelClick = (e) => {
        e.preventDefault()
        addCustomerDetails(detail.customerName, detail.address, detail.mNumber, detail.gender, detail.checkInDate, detail.checkOutDate)
        setDetail({
            customerName: "",
            address: "",
            mNumber: "",
            gender: "",
            checkInDate: "",
            checkOutDate: ""
        })
    }

    const handelChange = (e) => {
        setDetail({...detail, [e.target.name]: e.target.value})
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
                        onChange={handelChange}
                        value={detail.customerName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={handelChange}
                        name="address"
                        value={detail.address} />
                </div>
                <div className="mb-3">
                    <label htmlFor="mNumber" className="form-label">Mobile Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="mNumber"
                        name="mNumber"
                        onChange={handelChange}
                        value={detail.mNumber} />
                </div>
                <div className="mb-3">
                    <label htmlFor="mNumber" className="form-label">Select Gender</label>
                    <select className="form-select" aria-label="Default select example" name="gender" onChange={handelChange}>
                        <option selected>Select...</option>
                        <option value={detail.gender} >Male</option>
                        <option value={detail.gender} >Female</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="mNumber" className="form-label">CheckIn Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="checkInDate"
                        name="checkInDate"
                        onChange={handelChange}
                        value={detail.checkInDate} />
                </div>
                <div className="mb-3">
                    <label htmlFor="mNumber" className="form-label">CheckOut Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="checkOutDate"
                        name="checkOutDate"
                        onChange={handelChange}
                        value={detail.checkOutDate} />
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
