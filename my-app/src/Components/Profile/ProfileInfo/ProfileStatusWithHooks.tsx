import React, {FC, Props, useEffect, useState} from "react";
import style from "./ProfileInfo.module.css"
type PropsType = {
    userStatus:string
    updateUserStatus:(userStatus:string)=>void
}
const ProfileStatusWithHooks: FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [userStatus, setUserStatus] = useState(props.userStatus);
    useEffect(()=>{
        setUserStatus(props.userStatus)
    }, [props.userStatus]);

    const turnOnEditMode = ()=> {
        setEditMode(true)
    };
    const turnOffEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(userStatus)
    };
    const onChangeStatus = (e:any) => {
        setUserStatus(e.target.value)
    };
    return (
        <div className='d-flex justify-content-center'>
            {!editMode ?
                <div>
                    <span onClick={turnOnEditMode} className={style.status}>{!props.userStatus ? 'add your status' :props.userStatus}</span>
                </div> :
                <div>
                    <input onChange={onChangeStatus}
                           onBlur={turnOffEditMode}
                           autoFocus={true} value={userStatus} />
                </div>}
        </div>
    )
};

export default ProfileStatusWithHooks
