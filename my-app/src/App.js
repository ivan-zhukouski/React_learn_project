import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Navbar";
import Avatar from "./Components/Profile/Avatar/Avatar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

function App(props) {
    return (
        <div className='App_wrapper'>
            <Header/>
            <NavBar friendsData={props.store.sideBarData.friendsData}/>
            <Avatar/>
            <div className='app_wrapper_content'>
                <Route path='/profile' render={()=> <Profile postsData={props.store.profileData.postsData} />}/>
                <Route path='/dialogs' render={()=> <Dialogs dialogsData={props.store.dialogData.dialogsData}
                                                             messageData={props.store.dialogData.messageData} />} />
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
