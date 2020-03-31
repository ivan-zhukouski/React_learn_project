import React, {useState} from "react";
import style from "./ProfileInfo.module.css"

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [userStatus, setUserStatus] = useState(props.userStatus);
    const turnOnEditMode = ()=> {
        setEditMode(true)
    };
    const turnOffEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(userStatus)
    };
    const onChangeStatus = (e) => {
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
                           autoFocus={true} value={props.userStatus} />
                </div>}
        </div>
    )
};

export default ProfileStatusWithHooks
