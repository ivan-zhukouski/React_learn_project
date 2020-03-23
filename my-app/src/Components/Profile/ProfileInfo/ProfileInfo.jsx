import React from "react";
import style from "./ProfileInfo.module.css"
import PreLoader from "../../common/PreLoader/PreLoader";
const ProfileInfo = (props) => {
    if(!props.userProfile){
        return <PreLoader/>
    }
    return(
        <div className={style.profile_info}>
            <div>
                Some information
            </div>
        </div>
    )
};
export default ProfileInfo
