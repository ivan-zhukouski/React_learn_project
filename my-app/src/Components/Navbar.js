import React from "react";

const NavBar = () => {
    return (
        <nav className='nav_bar'>
            <div className='d-flex flex-column'>
                <div style={{marginTop: '30px', marginLeft: '15px'}}>
                    <a>Profile</a>
                </div>
                <div style={{marginTop: '15px', marginLeft: '15px'}}>
                    <a>Massages</a>
                </div>
                <div style={{marginTop: '15px', marginLeft: '15px'}}>
                    <a>Music</a>
                </div>
                <div style={{marginTop: '15px', marginLeft: '15px'}}>
                    <a>News</a>
                </div>
                <div style={{marginTop: '15px', marginLeft: '15px'}}>
                    <a>Settings</a>
                </div>
            </div>
        </nav>
    )
};
export default NavBar
