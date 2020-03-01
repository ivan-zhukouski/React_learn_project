import React from 'react';
import './App.css';
import Header from "./Components/Header";
import NavBar from "./Components/Navbar";
import Avatar from "./Components/Avatar";
import Profile from "./Components/Profile";

function App() {
    return (
        <div className='App_wrapper'>
            <Header/>
            <NavBar/>
            <Avatar/>
            <Profile/>
        </div>
    );
}

export default App;
