import React, {FC} from "react";
import style from './Avatar.module.css'
import {connect} from "react-redux";
import ava_cat from "../../../assets/images/user_item.png"
import PreLoader from "../../common/PreLoader/PreLoader";
import {UserProfileType} from "../../../redux/reducers/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";

type PropsType = {
    userProfile?: UserProfileType | null
}

const Avatar:FC<PropsType> = (props) => {
    if(!props.userProfile){
        return <PreLoader/>
    }
    return (
        <div className={style.ava}>
            <div>
                <img className={style.ava_img}
                     src={props.userProfile.photos.large != null ? props.userProfile.photos.large : ava_cat } alt="ava"/>
            </div>
        </div>
    )
};
const mapStateToProps = (state:AppStateType) => {
    return {
        userProfile: state.profileData.userProfile
    }
};
export default connect(mapStateToProps)(Avatar);
