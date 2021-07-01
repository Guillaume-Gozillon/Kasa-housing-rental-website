import { useState } from "react";

const Toggle = ({children, title}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='faq active' onClick={() => setToggle(!toggle)}>
            <div className='faq-title'>
                <h2>{title}</h2>
                <i className="fas fa-chevron-down"></i>
            </div>
            {toggle && children}
        </div>
    )
}

export default Toggle
 