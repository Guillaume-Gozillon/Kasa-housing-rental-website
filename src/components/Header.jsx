import logo from '../img/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} className='logo' alt="logo" />
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

export default Header
