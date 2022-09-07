import React, { useContext, useState } from 'react'
import DetailItem from './DetailItem'
import Context from './context/Context'
import Edit from './Edit'

const Admin = () => {

    const context = useContext(Context)
    const { details } = context

    const edit = (editDiv,id) => {
       setId(id)
       setShow(true)
    }
    const [show, setShow] = useState(false)
    const [id, setId] = useState()

    return (
        <>
            <div className='container' style={{ marginTop: '65px' }}>
                <h1 className=' text-center'>Customer Details</h1>
            </div>

            <div className="row m-auto justify-content-center" style={{ width: "80%" }}>

                {details.map((detail) => {
                    return <div key={detail.id} className='container rounded my-2 mx-2 col-md-4'
                        style={{
                            border: "2px solid green",
                            width: "16rem",
                            height: "17rem"
                        }}>
                        <DetailItem
                            id={detail.id}
                            name={detail.customerName}
                            address={detail.address}
                            number={detail.mNumber}
                            gender={detail.gender}
                            inDate={detail.checkInDate}
                            outDate={detail.checkOutDate} 
                            edit={edit}/>
                    </div>
                })}
            </div>
            {(show===true?<Edit id={id}/>:'')}
        </>
    )
}

export default Admin
