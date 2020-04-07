import React from "react";
import PreLoader from "../../common/PreLoader/PreLoader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.userProfile){
        return <PreLoader/>
    }
    const setAvatar = (e)=> {
        if(e.target.files.length){
            props.updateMyPhoto(e.target.files[0])
        }
    };
    return(
        <div>
            <h3 className='m-3'>Profile of '{props.userProfile.fullName}'</h3>
            <ProfileStatusWithHooks userStatus={props.userStatus}
                           updateUserStatus={props.updateUserStatus}/>
                           <div>
                               Change avatar
                               <input type='file' onChange={setAvatar}/>
                           </div>
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
