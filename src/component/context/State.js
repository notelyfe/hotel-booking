import { useState } from 'react';
import Context from './Context'

const State = (props) => {

    const [details, setDetails] = useState([
        {
            "name": "Ankesh",
            "address": "narela",
            "mNumber": "1023456789",
            "gender": "male",
            "checkInDate": "04/09/2022",
            "checkOutDate": "05/09/2022"
          },
        {
            "name": "harry",
            "address": "narela",
            "mNumber": "1023456799",
            "gender": "male",
            "checkInDate": "04/09/2022",
            "checkOutDate": "05/09/2022"
          }
    ])

    return (
        <Context.Provider value={ {details, setDetails} } >
            {props.children}
        </Context.Provider>
    )
}

export default State;