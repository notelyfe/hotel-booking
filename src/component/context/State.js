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
        const res = await fetch('https://note-hotel-booking-server.herokuapp.com/customerDetails')
        const data = await res.json()

        return data
    }

    //Add details
    const addCustomerDetails = async (customerName, address, mNumber, gender, checkInDate, checkOutDate) =>{
        // eslint-disable-next-line
        const res = await fetch('https://note-hotel-booking-server.herokuapp.com/customerDetails', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customerName, address, mNumber, gender, checkInDate, checkOutDate)
        });
        const data = await res.json()
        setDetails(JSON.parse(data))

    }

    //Edit Details
    const editDetails = async ({customerName, address, mNumber, gender, checkInDate, checkOutDate, id}) => {
        const res = await fetch(`https://note-hotel-booking-server.herokuapp.com/customerDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({customerName, address, mNumber, gender, checkInDate, checkOutDate})
        });
        const json = await res.json();

        let newDetails = JSON.parse(JSON.stringify(details))
        //clientSide edit
        for(let i=0; i<newDetails.length; i++){
            const ele = newDetails[i];
            if(ele.id === id){
                newDetails[i].customerName = customerName
                newDetails[i].address = address
                newDetails[i].mNumber = mNumber
                newDetails[i].gender = gender
                newDetails[i].checkInDate = checkInDate
                newDetails[i].checkOutDate = checkOutDate
                break;
            }
        }
        setDetails(newDetails)
    }

    //Delete Details
    const deleteDetails = async (id) => {
        await fetch(`https://note-hotel-booking-server.herokuapp.com/customerDetails/${id}`,{
            method: 'DELETE'
        })
        setDetails(details.filter((details) => details.id !== id))
    }

    return (
        <Context.Provider value={{ details, setDetails, addCustomerDetails, deleteDetails, editDetails }} >
            {props.children}
        </Context.Provider>
    )
}

export default State;