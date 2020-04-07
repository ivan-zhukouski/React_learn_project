import React from "react";
import PreLoader from "../common/PreLoader/PreLoader";

const UserProfile = (props) => {
    if (!props.userExactProfile) {
        return <PreLoader/>
    }
    return (
        <div>
            <h3 className='m-3'>Profile of '{props.userExactProfile.fullName}'</h3>
            <div className='d-flex'>
                <div className='m-3'>
                    Status: {props.userStatus} <br/>
                    AboutMe: {props.userExactProfile.aboutMe} <br/>
                    FaceBook: {props.userExactProfile.contacts.facebook}<br/>
                    vk: {props.userExactProfile.contacts.vk}
                </div>
            </div>
        </div>
    )
};

export default UserProfile
