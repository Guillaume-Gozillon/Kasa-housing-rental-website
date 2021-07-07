import React, { useState } from "react"
import arrow from '../img/arrow.svg'

class Slider extends React.Component {
    constructor(accomodation) {
        super(accomodation)

        this.accomodation = accomodation.accomodation
        this.state = { image: 0 }
        this.length = accomodation.accomodation.pictures.length
    }

    nextSlide = () => {
        const next = this.state.image === this.length 
            ? this.state.image = 0 
            : this.state.image += 1

        this.setState({
            next
        })
    }

    prevSlide = () => {
        const prev = this.state.image === 0 
            ? this.state.image = this.length -= 1 
            : this.state.image -= 1 

        this.setState({
            prev
        })
    }

    testPrev = () => {
        this.setState(image === 0 
            ? length - 1 
            : image - 1)
    }

    render() {
        return (
            <div className='slider'>
                <img 
                    src={arrow} 
                    alt="arrow" 
                    className='arrow arrow-right' 
                    onClick={this.nextSlide} 
                />
                <img 
                    src={arrow} 
                    alt="arrow" 
                    className=' arrow arrow-left' 
                    onClick={this.prevSlide} 
                />
                {this.accomodation.pictures.map((slide, index) => {
                    return (
                        <div 
                            className={index === this.state.image 
                            ? 'slide active' 
                            : 'slide'} key={index}>
                            {index === this.state.image  && (
                                <img 
                                    src={slide} 
                                    alt={this.accomodation.title}
                                    className='image-slider' 
                                />
                            )}
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default Slider

{/* 
import { useState } from "react"
import arrow from '../img/arrow.svg'

const Slider = ({accomodation}) => {
    const [image, setImage] = useState(0)
    const length = accomodation.pictures.length

    const nextSlide = () => {
        setImage(image === length - 1 
            ? 0 
            : image + 1)
    }

    const prevSlide = () => {
        setImage(image === 0 
            ? length - 1 
            : image - 1)
    }

    return (
        <div className='slider'>
            <img 
                src={arrow} 
                alt="arrow" 
                className='arrow arrow-right' 
                onClick={nextSlide} 
            />
            <img 
                src={arrow} 
                alt="arrow" 
                className=' arrow arrow-left' 
                onClick={prevSlide} 
            />
            {accomodation.pictures.map((slide, index) => {
                return (
                    <div 
                        className={index === image 
                        ? 'slide active' 
                        : 'slide'} key={index}>
                        {index === image && (
                            <img 
                                src={slide} 
                                alt={accomodation.title}
                                className='image-slider' 
                            />
                        )}
                    </div>
                )
            })
            }
        </div>
    )
}

export default Slider

*/}