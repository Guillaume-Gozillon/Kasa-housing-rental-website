import React from 'react'
import logo from '../img/logo-white.svg'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <img src={logo} alt="" />
                <p>© 2021 Kasa. All rights reserved</p>
            </div>
        )
    }
}
export default Footer
