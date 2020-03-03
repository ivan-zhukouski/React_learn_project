import React from "react";
import style from './Header.module.css'
const Header = ()=> {
    return (
        <header className={style.main_header}>
            <div>
                <img className='App-logo' style={{width: '70px', height:'70px'}} src='https://logosolusa.com/wp-content/uploads/parser/Will-Logo-1.png' alt='logo'/>
            </div>
        </header>
    )
};
export default Header
