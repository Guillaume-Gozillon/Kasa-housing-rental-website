import { useState } from "react";

const ToggleRental = ({children, title}) => {
    const [toggleRental, setToggleRental] = useState(false)
    return (
        <div className='faq' onClick={() => setToggleRental(!toggle)}>
            <div className='faq-title'>
                <h2>{title}</h2>
                <i class="fas fa-chevron-down"></i>
            </div>
            {toggleRental ? children : ''}
        </div>
    )
}

export default ToggleRental
 