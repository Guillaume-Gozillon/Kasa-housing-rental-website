import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import data from '../data.json' 
import Header from "./Header"
import Toggle from "./Toggle"
import Footer from "./Footer"

// Création des CARTE en fonction de leur ID
const Rental = () => {
    const history = useHistory()
    const url = history.location.pathname

    const [accomodations, setAccomodations] = useState(data)
    const [accomodation, setAccomodation] = useState(null)

    useEffect(() => {
        const currentAccomodation = accomodations
            .filter((stateAccomodation) => `/${stateAccomodation.id}` === url)
            
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
                                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
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
