import React from "react";
import style from './Header.module.css'
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/auth-reducer";

type HeaderType = {
    logout: any
    isLoading: boolean
    message: string
    isAuth: boolean
}
const Header = (props: HeaderType)=> {
     const handleLogout = () => {
        props.logout()
    };
        return (
            <div className={style.main_header}>
                <header className='d-flex justify-content-between'>
                    <div>
                        <img className={props.isLoading ? 'App-logo' : ''} style={{width: '70px', height: '70px'}}
                             src='https://logosolusa.com/wp-content/uploads/parser/Will-Logo-1.png' alt='logo'/>
                    </div>
                    <div className='d-flex align-items-center m-3'>
                        <h3>{props.message}</h3>
                    </div>
                    {props.isAuth && <button onClick={handleLogout} className='m-3'>Logout</button>}
                </header>
            </div>
        )
};
const mapStateToProps = (state:any) => {
    return{
        isAuth:state.authData.isAuth
    }
};
const actions = {
    logout
};
export default connect(mapStateToProps,actions)(Header)
