import React from "react";
import style from './Header.module.css'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false,
        }
    }
    HandleClick = () => {
        const currentState = this.state.active;
        this.setState({active: !currentState})
    };
    render() {
        return (
            <header className={style.main_header}>
                <div>
                    <img className={this.state.active ? 'App-logo' : ''} style={{width: '70px', height: '70px'}}
                         src='https://logosolusa.com/wp-content/uploads/parser/Will-Logo-1.png' alt='logo'/>
                </div>
                <button onClick={this.HandleClick}>cycle</button>
            </header>
        )
    }
}
export default Header
