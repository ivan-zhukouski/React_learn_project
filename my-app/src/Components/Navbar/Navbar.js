import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
const NavBar = () => {
    return (
        <nav className={style.nav_bar}>
            <div className={style.nav_links}>
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
                    <div className={style.link + " " + style.last_link}>
                        <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
                    </div>
                </div>
            </div>
            <div className={style.friend_bar}>
                <Friends/>
            </div>
        </nav>
    )
};
export default NavBar
