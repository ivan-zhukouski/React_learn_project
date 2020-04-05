import React from "react";
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import user_img from "../../assets/images/user_item.png";

const User = ({user, ...props}) => {
    return (
        <div className={`d-flex m-3 ${style.userBox}`}>
            <div className='d-flex flex-column'>
                <NavLink to={`users/profile/${user.id}`}>
                    <img style={{width: '50px'}} src={user.photos.small != null ? user.photos.small : user_img}
                         alt="ava"/>
                </NavLink>
                {user.followed
                    ? <button disabled={props.isFollowingProgress.some(item=> item === user.id)} onClick={() => {
                        props.removeUser(user.id)
                    }}>Remove</button>
                    : <button disabled={props.isFollowingProgress.some(item=> item === user.id)} onClick={() => {
                        props.followUser(user.id)
                    }}>Follow</button>}
            </div>
            <div className='d-flex '>
                <div className='m-3'>
                    {user.name}
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>
                        u.location.city
                    </div>
                    <div>
                        u.location.country
                    </div>
                </div>
            </div>
        </div>
    )
};

export default User
