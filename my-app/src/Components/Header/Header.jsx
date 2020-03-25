import React from "react";
import style from './Header.module.css'

class Header extends React.Component {
    render() {
        console.log(this.props);
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

                </header>
            </div>

        )
    }
}
export default Header
