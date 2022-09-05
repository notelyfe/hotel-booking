import { useEffect, useState } from 'react';
import Context from './Context'

const State = (props) => {

    const [details, setDetails] = useState([])

    useEffect(() => {
        const getData = async () => {
            const dataFromServer = await fetchData()
            setDetails(dataFromServer)
        }

        getData()
    }, [])

    //fetching data from json-server
    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/customerDetails')
        const data = await res.json()

        return data
    }

    //Add details
    const addCustomerDetails = async (customerName, address, mNumber, gender, checkInDate, checkOutDate) =>{

        const res = await fetch('http://localhost:5000/customerDetails', {
            method: 'POST',
            header: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({customerName, address, mNumber, gender, checkInDate, checkOutDate})
        });

        const data = await res.json()
        // setDetails([...details, data])
        setDetails([details.concat(data)])
    }

    return (
        <Context.Provider value={{ details, setDetails, addCustomerDetails }} >
            {props.children}
        </Context.Provider>
    )
}

export default State;