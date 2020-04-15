import React, {FC} from "react";
import PreLoader from "../../common/PreLoader/PreLoader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {UserProfileType} from "../../../redux/reducers/profile-reducer";

type PropsType = {
    userProfile: UserProfileType
    userStatus:string
    updateUserStatus: (userStatus:string)=> void
}

const ProfileInfo:FC<PropsType> = (props) => {
    if(!props.userProfile){
        return <PreLoader/>
    }
    return(
        <div>
            <h3 className='m-3'>Profile of '{props.userProfile.fullName}'</h3>
            <ProfileStatusWithHooks userStatus={props.userStatus}
                           updateUserStatus={props.updateUserStatus}/>
            <div className='d-flex'>
                <div className='m-3'>
                    Status: {props.userProfile.aboutMe} <br/>
                    FaceBook: {props.userProfile.contacts.facebook}<br/>
                    vk: {props.userProfile.contacts.vk}
                </div>
            </div>
        </div>
    )
};
export default ProfileInfo
