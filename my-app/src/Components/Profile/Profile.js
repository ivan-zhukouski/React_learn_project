import React from "react";
import style from './Profile.module.css'
import MyPosts from "../Posts/MyPosts/MyPosts";
const  Profile = () => {
    return(
        <div>
            <p className={style.ml}>Ivan Zhukouski, 28 years old</p>
            <MyPosts/>
        </div>
    )
};
export  default Profile
