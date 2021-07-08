import React, { Component } from "react"
import data from '../data.json' 
import Header from "../components/Header"
import Toggle from "../components/Toggle"
import Footer from "../components/Footer"
import Slider from "../components/Slider"

import { Redirect } from "react-router-dom";

class Rental extends Component {

    constructor(props) {
        super(props)
        this.url = props.history.location.pathname
    }

    getStars = currentAccomodation => {
        const stars = []
        const rating = currentAccomodation.rating

        for (let i = 1; i <= 5; i++) {
           if (i <= rating) {
            stars.push(<i key={i} className="fas fa-star"></i>)
           } else {
            stars.push(<i key={i} className="fas fa-star empty"></i>)
           }
        }
        return stars
    }

    render() {
        const currentAccomodation = data
            .filter(logement => `/rental/${logement.id}` === this.url)[0]

        if (currentAccomodation === undefined) { 
            return <Redirect to="/404" />
        }

        return (
            <div>
                <Header />
                {currentAccomodation && (
                    <div className='rental-container'>
                        {currentAccomodation.pictures.length <= 1 
                        ? <img 
                            className='rental-image' 
                            src={currentAccomodation.cover} 
                            alt={currentAccomodation.title} />
                        : <Slider currentAccomodation={currentAccomodation} />}
                        <div className='rental-info'>
                            <div className='rental-left'>
                                <h1>{currentAccomodation.title}</h1>
                                <h2>{currentAccomodation.location}</h2>
                                <ul>
                                    {currentAccomodation.tags.map((item, index) => (
                                        <li key={index}>{item}</li>)
                                    )}
                                </ul>
                            </div>
                            <div className="rental-right">
                                <div className='rental-profil'>
                                    <p>{currentAccomodation.host.name}</p>
                                    <img 
                                        src={currentAccomodation.host.picture} 
                                        alt={`Photo de ${currentAccomodation.host.name}`} 
                                    />
                                </div>
                                <div className='stars'>
                                    {this.getStars(currentAccomodation)}
                                </div>
                            </div>
                        </div>
                    </div>)}
    
                    {currentAccomodation && (
                        <div className="rental-toggle">
                            <div className='separator'>
                                <Toggle className='collapse' title='Description'>
                                    <div className='services'>
                                        <div className='toggle'>
                                            <p>{currentAccomodation.description}</p>
                                        </div>
                                    </div>
                                </Toggle>
                            </div>
    
                            <div className='separator'>                        
                                <Toggle className='collapse' title='Equipement'>
                                    <div className='services'>
                                        <div className='toggle'>
                                            {currentAccomodation.equipments.map((x, index) => (
                                                <p key={index}>{x}</p>)
                                            )}
                                        </div>
                                    </div>
                                </Toggle>
                            </div>
                        </div>
                    )}
                <Footer />
            </div>
        )
    }
}

export default Rental
