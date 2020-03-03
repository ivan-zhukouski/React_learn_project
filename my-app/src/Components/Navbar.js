import React from "react";
import style from './Navbar.module.css'
const NavBar = () => {
    return (
        <nav className={style.nav_bar}>
            <div className='d-flex flex-column'>
                <div className={style.mt_ml}>
                    <a>Profile</a>
                </div>
                <div className={style.mt_ml}>
                    <a>Massages</a>
                </div>
                <div className={style.mt_ml}>
                    <a>Music</a>
                </div>
                <div className={style.mt_ml}>
                    <a>News</a>
                </div>
                <div className={style.mt_ml}>
                    <a>Settings</a>
                </div>
            </div>
        </nav>
    )
};
export default NavBar
