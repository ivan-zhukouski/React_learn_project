import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPostsContainer postsData={props.postsData}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch} />
        </div>
    )
};
export default Profile
