import React from 'react';
import ReactDOM from 'react-dom/client'
import logo from './images/logo.png';
import user from './images/usericon.png';

const header = React.createElement("div",{class:"title"},[
    React.createElement("h1",{},"h1 tag"),
    React.createElement("h2",{},"h2 tag"),
    React.createElement("h3",{},"h3 tag")

])

const header1 = (<div className='title'>
    <h1>This is h1 tag</h1>
    <h2>This is h2 tag</h2>
    <h3>This is h3 tag</h3>
</div>)

const TitleComponent = () => <p>This is title component</p>

const Header = () => {
    return (
        <div className='title'>
            <h1 className='main-heading'>This is h1 tag</h1>
            <h2 className='sub-heading'>This is h2 tag</h2>
            <h3 className='par-heading'>This is h3 tag</h3>
            <TitleComponent/>
        </div>
    )
}

const HeaderComponent = () => {
    return (
        <div className='main'>
            <div className='item-1'>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <div className='item-2'>
                <input type='text' className='input'/>
                <button type='button'>Search</button>
            </div>
            <div className='item-3'>
                <img src={user} alt='user-icon' className='user'/>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);