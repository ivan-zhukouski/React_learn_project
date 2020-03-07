import React from "react";
import style from './Profile.module.css'
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let postsData = [
    {post:'Hi, How are you?? Are kidding me??', likeCount: 24},
    {post:'Have you read my message??', likeCount: 27},
];
const Profile = () => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts postsData={postsData} />
        </div>
    )
};
export default Profile
