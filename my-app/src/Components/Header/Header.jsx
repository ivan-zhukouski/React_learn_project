import React from "react";
import style from './Header.module.css'
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/auth-reducer";

class Header extends React.Component {
    handleLogout = () => {
        this.props.logout()
    };
    render() {
        return (
            <div className={style.main_header}>
                <header className='d-flex justify-content-between'>
                    <div>
                        <img className={this.props.isLoading ? 'App-logo' : ''} style={{width: '70px', height: '70px'}}
                             src='https://logosolusa.com/wp-content/uploads/parser/Will-Logo-1.png' alt='logo'/>
                    </div>
                    <div className='d-flex align-items-center m-3'>
                        <h3>{this.props.message}</h3>
                    </div>
                    {this.props.isAuth && <button onClick={this.handleLogout} className='m-3'>Logout</button>}
                </header>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        isAuth:state.authData.isAuth
    }
};
const actions = {
    logout
};
export default connect(mapStateToProps,actions)(Header)
