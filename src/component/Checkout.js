import React, { useContext, useState } from 'react'
import CustomerDetails from './CustomerDetails'
import Context from './context/Context'
import './checkout.css'

const Checkout = () => {

    const context = useContext(Context)
    const { details } = context

    const search = (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        details.map((detail) => {
            // eslint-disable-next-line
            if ((detail.mNumber === number) || (detail.id == cId)) {
                setFound(true)
                setPropDetail(detail)
            }
            setNumber('')
            setCid('')
        })
    }
    const [propDetail, setPropDetail] = useState()

    const handelNumberSearch = (e) => {
        e.preventDefault();
        setNumber(e.target.value)
    }

    const handelCidSearch = (e) => {
        e.preventDefault()
        setCid(e.target.value)
    }

    const [found, setFound] = useState(false)
    const [number, setNumber] = useState('')
    const [cId, setCid] = useState('')

    return (
        <form>
            <div className="mb-3 container d-flex flex-column align-items-center" style={{ width: "60%", marginTop: "70px" }}>
                <div className="container d-flex justify-content-center align-items-center">
                    <label htmlFor="mNumber" className="form-label">Mobile Number</label>
                    <input
                        type="text"
                        className="form-control mx-2"
                        onChange={handelNumberSearch}
                        value={number} id="mNumber"
                        aria-describedby="mNumber"
                        placeholder='Enter Number'
                        style={{width:"20%"}}/>

                    <small className='mx-5 my-3 optional'>Or</small>

                    <label htmlFor="cId" className="form-label">Customer Id</label>
                    <input
                        type="text"
                        className="form-control mx-2"
                        onChange={handelCidSearch}
                        value={cId} id="cId"
                        aria-describedby="mNumber"
                        placeholder='Enter Id'
                        style={{width:"20%"}}/>
                </div>

                <button type="button" className="btn btn-info my-2" onClick={search}>Search</button>
            </div>
            <hr />
            <div className='container' style={{ width: '60%' }}>
                <h2 className='text-center'>Customer Details</h2>
                <div >
                    {(found === true) ? <CustomerDetails key={propDetail.id} propDetail={propDetail} /> : ""}
                </div>
            </div>
        </form>
    )
}

export default Checkout