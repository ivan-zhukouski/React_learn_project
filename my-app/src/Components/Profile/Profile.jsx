import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";

const Profile = props => {
    return (
        <div>
            <ProfileInfo
                userStatus={props.userStatus}
                userProfile={props.userProfile}
                updateUserStatus={props.updateUserStatus}
                updateMyPhoto={props.updateMyPhoto}/>
            <MyPostsContainer/>
        </div>
    )
};
export default Profile
