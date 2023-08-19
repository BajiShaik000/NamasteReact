import Title from "./Title";
import { useState } from "react";
import { Link } from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState(false);
    return (
        <div className='header'>
            <div className="title">
                <Title />
                <Link to='/'>Foodie Corner</Link>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/cart'><i class='bx bx-cart'></i></Link></li>
                    <li>
                        <Link to='/login'>
                            <button className="login-btn" onClick={() => setValue(!value)}>{value ? "Logout" : "Login"}</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;