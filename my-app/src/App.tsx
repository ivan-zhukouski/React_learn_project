import React, {Component} from "react";
import "./App.css";
import Avatar from "./Components/Profile/Avatar/Avatar";
import Music from "./Components/Music/Music";
import {Redirect, Route, Switch} from "react-router-dom";
import News from "./Components/News/News";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import SettingsContainer from "./Components/Settings/SettingsContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import PreLoader from "./Components/common/PreLoader/PreLoader";
import NavBarContainer from "./Components/Navbar/NavbarContainer"
import {withSuspense} from "./HOC/withSuspenseLoad";
import {AppStateType} from "./redux/redux-store";

const DialogsContainer = React.lazy(()=> import('./Components/Dialogs/DialogsContainer'));

interface InterfaceProps {
    initializeApp: any
    initialize: any
}
class App extends Component<InterfaceProps> {
        componentDidMount(){
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialize){
            return <PreLoader/>
        }

        return (
            <div className='App_wrapper'>
                <HeaderContainer/>
                <NavBarContainer/>
                <Avatar/>
                <div className='app_wrapper_content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to='/profile'/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs'
                               render={ withSuspense(DialogsContainer) }/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/news' component={News}/>
                        <Route path='/settings' render={()=> <SettingsContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: AppStateType) => {
    return {
        initialize: state.appData.initialized
    }
};
const actions = {
    initializeApp
};
export default connect(mapStateToProps, actions)(App);
