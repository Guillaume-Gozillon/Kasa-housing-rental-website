import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='navbar'>
            <img src={logo} className='logo' alt="logo" />
            <ul>
                <li>
                    <Link to='/'>Accueil</Link>
                </li>
                <li>
                    <Link to='/'>A propos</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
