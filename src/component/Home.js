import React from 'react'

const Home = () => {

    // const [name, setName] = useState('')
    // const [address, setAddress] = useState('')
    // const [mNumber, setMNumber] = useState('')
    // const [gender, setGender] = useState('')
    // const [date, setDate] = useState('')

    const submit = (e) => {
        e.preventDefault()
        console.log('submit clicked')
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
                        aria-describedby="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mNumber" className="form-label">Mobile Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="mNumber"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="mNumber" className="form-label">Select Gender</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select...</option>
                        <option >Male</option>
                        <option >Female</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="mNumber" className="form-label">CheckIn Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
            </form>

        </div>
    )
}

export default Home
