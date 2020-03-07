import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <nav className={style.nav_bar}>
            <div className='d-flex flex-column'>
                <div className={style.link}>
                    <NavLink exact to='/profile' activeClassName={style.active} >Profile</NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to='/dialogs' activeClassName={style.active} >Massages</NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to='/news' activeClassName={style.active}>News</NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
};
export default NavBar
