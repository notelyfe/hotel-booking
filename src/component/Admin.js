import React, { useContext } from 'react'
import DetailItem from './DetailItem'
import Context from './context/Context'

const Admin = () => {

    const context = useContext(Context)
    const { details } = context

    return (
        <>
            <div className='container' style={{ marginTop: '65px' }}>
                <h1 className=' text-center'>Customer Details</h1>
            </div>
            <div className="row m-auto justify-content-center" style={{ width: "80%" }}>

                {details.map((detail) => {
                    return <div className='container rounded my-2 mx-2 col-md-4'
                        style={{
                            border: "2px solid green",
                            width: "16rem",
                            height: "15rem"
                        }}>
                        <DetailItem
                            id={detail.id}
                            name={detail.customerName}
                            address={detail.address}
                            number={detail.mNumber}
                            gender={detail.gender}
                            inDate={detail.checkInDate}
                            outDate={detail.checkOutDate} />
                    </div>
                })}
            </div>
        </>
    )
}

export default Admin
