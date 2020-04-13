import React, { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";
import {UserProfileType} from "../../redux/reducers/profile-reducer";
type PropsType = {
    userStatus:string
    userProfile: UserProfileType
    updateUserStatus: (userStatus:string)=> void
}
const Profile:FC<PropsType> = props => {
    return (
        <div>
            <ProfileInfo
                userStatus={props.userStatus}
                userProfile={props.userProfile}
                updateUserStatus={props.updateUserStatus}
                />
            <MyPostsContainer/>
        </div>
    )
};
export default Profile
