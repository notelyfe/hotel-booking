import React, { useContext, useState } from 'react'
import CustomerDetails from './CustomerDetails'
import Context from './context/Context'

const Checkout = (  ) => {

    const context = useContext(Context)
    const {details, setSetails} = context

    const search = (e) => {
        e.preventDefault();  
    }

    const handelNumberSearch = (e) => {
        e.preventDefault();
        setNumber(e.target.value)
    }

    const [number, setNumber] = useState('')

    return (
        <form>
            <div className="mb-3 container" style={{width:"60%", marginTop:"65px"}}>
                <label htmlFor="mNumber" className="form-label">Enter Mobile Number</label>
                <input 
                type="text" 
                className="form-control" 
                onChange={handelNumberSearch} 
                value={number} id="mNumber" 
                aria-describedby="mNumber" />

                <button type="button" className="btn btn-info my-2" onClick={search}>Search</button>
            </div>
                <hr/>
                <div className='container' style={{ width: '80%' }}>
                <h2 className='text-center'>Customer Details</h2>
                <div >
                {details.map((detail)=> {
                  return  (detail.mNumber === number?<CustomerDetails key={detail.mNumber} detail={detail}/>:"")
                })}
                </div>
                </div>
        </form>
    )
}

export default Checkout
