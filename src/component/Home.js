import React from 'react'

const Home = () => {
    return (
        <div className="container" style={{ width: "60%", marginTop: "60px" }}>
            <h2 className='text-center'>Customer Details</h2>

            <form>
                <div className="mb-3">
                    <label htmlhtmlFor="name" className="form-label">Enter Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="name" />
                </div>
                <div className="mb-3">
                    <label htmlhtmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" />
                </div>
                <div className="mb-3">
                    <label htmlhtmlFor="mNumber" className="form-label">Mobile Number</label>
                    <input type="text" className="form-control" id="mNumber" />
                </div>
                <div className="mb-3">
                    <label htmlhtmlFor="mNumber" className="form-label">Select Gender</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select...</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlhtmlFor="mNumber" className="form-label">CheckIn Date</label>
                    <input type="date" className="form-control" id="date" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Home
