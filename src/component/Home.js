import React, { useContext, useState } from 'react'
import Context from './context/Context'
import Alert from './Alert'

const Home = () => {

    const context = useContext(Context)
    const { addCustomerDetails } = context;

    const [customerName, setCustomerName] = useState('')
    const [address, setAddress] = useState('')
    const [mNumber, setMNumber] = useState('')
    const [gender, setGender] = useState('default')
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')
    const [alert, setAlert] = useState(false)

    const submit = (e) => {
        e.preventDefault()
        if ((customerName !== '') && (address !== '') && (mNumber !== '') && (gender !== 'default') && (checkInDate !== '') && (checkOutDate !== '')) {
            addCustomerDetails({ customerName, address, mNumber, gender, checkInDate, checkOutDate })
            setCustomerName('')
            setAddress('')
            setMNumber('')
            setGender('default')
            setCheckInDate('')
            setCheckOutDate('')
            setAlert(false)
        }
        else{
            setAlert(true)
        }
    }

    const closeAlert = () =>{
        if(alert === true){
            setAlert(false)
        } 
    }

    return (
        <>
            {(alert===true)?<Alert closeAlert={closeAlert}/>:""}
            <div className="container" style={{ width: "60%", marginTop: "60px" }}>
                <h2 className='text-center'>Customer Details</h2>

                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Enter Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="customerName"
                            aria-describedby="name"
                            onChange={(e) => setCustomerName(e.target.value.toUpperCase())}
                            value={customerName} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setAddress(e.target.value.toUpperCase())}
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
                            onChange={(e) => setMNumber(e.target.value)}
                            value={mNumber} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mNumber" className="form-label">Select Gender</label>
                        <select className="form-select" defaultValue={'default'} aria-label="Default select example" name="gender" onChange={(e) => setGender(e.target.value.toUpperCase())}>
                            <option value={'default'} disabled >Select...</option>
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
                            onChange={(e) => setCheckInDate(e.target.value)}
                            value={checkInDate} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mNumber" className="form-label">CheckOut Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="checkOutDate"
                            name="checkOutDate"
                            onChange={(e) => setCheckOutDate(e.target.value)}
                            value={checkOutDate} />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={submit}>Submit</button>

                </form>

            </div>
        </>
    )
}

export default Home