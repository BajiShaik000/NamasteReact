import Title from "./Title";
const Header = () => {
    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li><box-icon className='cart' type='solid' name='cart-add'></box-icon></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;