import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import data from '../data.json' 
import Header from "../components/Header"
import Toggle from "../components/Toggle"
import Footer from "../components/Footer"
import Slider from "../components/Slider"

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

    const getStars = () => {
        const stars = []
        const rating = accomodation.rating

        for (let i = 1; i <= 5; i++) {
           if (i <= rating) {
            stars.push(<i class="fas fa-star"></i>)
           } else {
            stars.push(<i class="fas fa-star empty"></i>)
           }
        }
        return stars
    }

    return (
        <div>
            <Header/>
            {accomodation && (
                <div className='rental-container'>
                    {accomodation.pictures.length <= 1 
                    ? <img 
                        className='rental-image' 
                        src={accomodation.cover} 
                        alt={accomodation.title} />
                    : <Slider accomodation={accomodation} />}
                    <div className='rental-info'>
                        <div className='rental-left'>
                            <h1>{accomodation.title}</h1>
                            <h2>{accomodation.location}</h2>
                            <ul>
                                {accomodation.tags.map(item => <li>{item}</li>)}
                            </ul>
                        </div>
                        <div className="rental-right">
                            <div className='rental-profil'>
                                <p>{accomodation.host.name}</p>
                                <img 
                                    src={accomodation.host.picture} 
                                    alt={`Photo de ${accomodation.host.name}`} 
                                />
                            </div>
                            <div className='stars'>
                                {getStars()}
                            </div>
                        </div>
                    </div>
                </div>)}

                {accomodation && (
                    <div className="rental-toggle">
                        <div className='separator'>
                            <Toggle className='collapse' title='Description'>
                                <div className='services'>
                                    <div className='toggle'>
                                        <p>{accomodation.description}</p>
                                    </div>
                                </div>
                            </Toggle>
                        </div>

                        <div className='separator'>                        
                            <Toggle className='collapse' title='Equipement'>
                                <div className='services'>
                                    <div className='toggle'>
                                        {accomodation.equipments.map(x => <p>{x}</p>)}
                                    </div>
                                </div>
                            </Toggle>
                        </div>
                    </div>
                )}
            <Footer/>
        </div>
    )
}

export default Rental
