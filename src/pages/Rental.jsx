import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import data from '../data.json' 
import Header from "../components/Header"
import Toggle from "../components/Toggle"
import Footer from "../components/Footer"

// Création des CARTE en fonction de leur ID
const Rental = () => {
    const history = useHistory()
    const url = history.location.pathname

    const [accomodations, setAccomodations] = useState(data)
    const [accomodation, setAccomodation] = useState(null)

    useEffect(() => {
        const currentAccomodation = accomodations
            .filter(logement => `/rental/${logement.id}` === url)
            
        setAccomodation(currentAccomodation[0])
    }, [accomodations, url])

    return (
        <>
            <Header/>
            {accomodation && (
                <div className='rental-container'>
                    <img 
                        className='rental-image' 
                        src={accomodation.cover} 
                        alt={accomodation.title} 
                    />
                    <div className='rental-info'>
                        <div className='rental-left'>
                            <h1>{accomodation.title}</h1>
                            <h2>{accomodation.location}</h2>
                            <ul>
                                {accomodation.tags.map(item => <li>{item}</li>)}
                            </ul>
                        </div>
                        <div className="rental-right">
                            <p>{accomodation.host.name}</p>
                            <img src={accomodation.host.picture} alt="" />
                        </div>
                    </div>
                </div>
            )}
            {accomodation && (
                <div className="rental-toggle">
                    <Toggle className='collapse' title='Description'>
                        <div className='services'>
                            <div className='toggle'>
                                <p>{accomodation.description}</p>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle className='collapse' title='Equipement'>
                        <div className='services'>
                            <div className='toggle'>
                                {accomodation.equipments.map(x => <p>{x}</p>)}
                            </div>
                        </div>
                    </Toggle>
                </div>
            )}
            <Footer/>
        </>
    )
}

export default Rental