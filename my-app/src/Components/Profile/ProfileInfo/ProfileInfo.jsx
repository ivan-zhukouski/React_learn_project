import React from "react";
import style from "./ProfileInfo.module.css"
import PreLoader from "../../common/PreLoader/PreLoader";
const ProfileInfo = (props) => {
    if(!props.userProfile){
        return <PreLoader/>
    }
    return(
        <div>
            <h3 className='m-3'>Profile of '{props.userProfile.fullName}'</h3>
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
