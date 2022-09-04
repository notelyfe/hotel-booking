import React from 'react'
import CustomerDetails from './CustomerDetails'

const Checkout = () => {
    return (
        <form>
            <div className="mb-3 container" style={{width:"60%", marginTop:"65px"}}>
                <label htmlFor="mNumber" className="form-label">Enter Mobile Number</label>
                <input type="text" className="form-control" id="mNumber" aria-describedby="mNumber" />
                <button type="button" class="btn btn-info my-2">Search</button>
            </div>
                <hr/>
                <CustomerDetails />
        </form>
    )
}

export default Checkout
