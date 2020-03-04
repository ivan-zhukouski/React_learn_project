import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Navbar";
import Avatar from "./Components/Avatar/Avatar";
import Profile from "./Components/Profile/Profile";
import MyPosts from "./Components/Posts/MyPosts/MyPosts";

function App() {
    return (
        <div className='App_wrapper'>
            <Header/>
            <NavBar/>
            <Avatar/>
            <Profile/>
            <MyPosts/>
        </div>
    );
}

export default App;
