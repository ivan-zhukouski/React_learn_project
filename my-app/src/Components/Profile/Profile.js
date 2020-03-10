import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost}
                     postsData={props.postsData}
                     updatePostText={props.updatePostText}
                     newPostText={props.newPostText} />
        </div>
    )
};
export default Profile
