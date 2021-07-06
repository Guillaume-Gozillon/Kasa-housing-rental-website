import logo from '../img/logo.svg'
import { Link } from 'react-router-dom'
import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <Link to='/'>
                    <img src={logo} className='logo' alt="logo" />
                </Link>
                <ul>
                    <li>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li>
                        <Link to='/a-propos'>A propos</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header
