import React from "react";
import style from './Avatar.module.css'
import {connect} from "react-redux";
import ava_cat from "../../../assets/images/user_item.png"
import PreLoader from "../../common/PreLoader/PreLoader";

const Avatar = (props) => {
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
const mapStateToProps = (state) => {
    return {
        userProfile: state.profileData.userProfile
    }
};
export default connect(mapStateToProps)(Avatar);
