import React from "react";
import style from './Header.module.css'

class Header extends React.Component {
    render() {
        return (
            <div className={style.main_header}>
                <header >
                    <div>
                        <img className={this.props.isLoading && 'App-logo'} style={{width: '70px', height: '70px'}}
                             src='https://logosolusa.com/wp-content/uploads/parser/Will-Logo-1.png' alt='logo'/>
                    </div>
                </header>
            </div>

        )
    }
}
export default Header
