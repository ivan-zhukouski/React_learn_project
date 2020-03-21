import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Navbar";
import Avatar from "./Components/Profile/Avatar/Avatar";
import Profile from "./Components/Profile/Profile";
import Music from "./Components/Music/Music";
import {Route, Switch} from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

function App(props) {
    return (
        <div className='App_wrapper'>
            <Header />
            <NavBar />
            <Avatar/>
            <div className='app_wrapper_content'>
                <Switch>
                    <Route exact path='/profile'
                           render={()=> <Profile />} />
                    <Route path='/dialogs'
                           render={()=> <DialogsContainer />} />
                    <Route path='/users'
                           render={()=> <UsersContainer />} />
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
