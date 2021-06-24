import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import data from '../data.json' 

const Rental = () => {
    const history = useHistory()
    const url = history.location.pathname

    const [accomodations, setAccomodations] = useState(data)
    const [accomodation, setAccomodation] = useState(null)


    // useEffect
    useEffect(() => {
        // console.log(`/${stateAccomodation.id}`);
        const currentAccomodation = accomodations
            .filter((stateAccomodation) => `/${stateAccomodation.id}` === url)
            
        setAccomodation(currentAccomodation[0])
    }, [accomodations, url])

    console.log(accomodation.location);

    return (
        <>
            {accomodation && (
                <div>
                    <h1>HEYYY{accomodation.location}</h1>
                </div>
            )}
        </>
    )
}

export default Rental
