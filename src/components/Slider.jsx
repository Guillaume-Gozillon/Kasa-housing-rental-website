import { useState } from "react"
import arrow from '../img/arrow.svg'

const Slider = ({accomodation}) => {

    const [image, setImage] = useState(0)
    const length = accomodation.pictures.length

    const nextSlide = () => {
        setImage(image === length - 1 ? 0 : image + 1)
    }

    const prevSlide = () => {
        setImage(image === 0 ? length - 1 : image - 1)
    }

    console.log(image);

    if (!Array.isArray(accomodation.pictures) || length <= 0) {
        return null
    }

    return (
        <section className='slider'>
            <img 
                src={arrow} 
                alt="arrow" 
                className=' arrow arrow-right' 
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
                        : 'slide'} key={index}
                    >
                        {index === image && (
                            <img 
                                src={slide} 
                                alt="housing" 
                                className='image-slider' 
                            />
                        )}
                    </div>
                )
            })
            }
        </section>
    )
}

export default Slider
