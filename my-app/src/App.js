import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Navbar";
import Avatar from "./Components/Avatar/Avatar";
import Profile from "./Components/Profile/Profile";
import MyPosts from "./Components/Posts/MyPosts/MyPosts";
import Dialogs from "./Components/Dialogs/Dialogs"

function App() {
    return (
        <div className='App_wrapper'>
            <Header/>
            <NavBar/>
            <Avatar/>
            <div className='app_wrapper_content'>
                {/*<Profile/>
                <MyPosts/>*/}
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;
