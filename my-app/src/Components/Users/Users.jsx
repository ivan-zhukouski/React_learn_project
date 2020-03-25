import React from "react";
import style from "./Users.module.css";
import user_img from "../../assets/images/user_item.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../API/api";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const pageList = pages.map((p, index) => {
        return (
            <div key={index}
                 onClick={() => {
                     props.onPageChange(p)
                 }}
                 className={`m-1 ${props.currentPage === p && style.currentPage}`}
                 style={{cursor: 'pointer'}}>
                {
                    p <= 10 && p
                }
            </div>
        )
    });
    const user = props.usersData.map(u => {
            return (
                <div key={u.id} className={`d-flex m-3 ${style.userBox}`}>
                    <div className='d-flex flex-column'>
                        <NavLink exact to={`/profile/${u.id}`}>
                            <img style={{width: '50px'}} src={u.photos.small != null ? u.photos.small : user_img}
                                 alt="ava"/>
                        </NavLink>
                        {u.followed
                            ? <button disabled={props.isFollowingProgress.some(item=> item === u.id)} onClick={() => {
                                props.isFollowing(true, u.id);
                               usersAPI.removeUser(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.remove(u.id)
                                        }
                                        props.isFollowing(false, u.id);
                                    });
                            }}>Remove</button>
                            : <button disabled={props.isFollowingProgress.some(item=> item === u.id)} onClick={() => {
                                props.isFollowing(true, u.id);
                               usersAPI.followUser(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.isFollowing(false, u.id);
                                    });
                            }}>Follow</button>}
                    </div>
                    <div className='d-flex '>
                        <div className='m-3'>
                            {u.name}
                            <div>{u.status}</div>
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
        }
    );
    return (
        <div>
            <div className='d-flex m-2' style={{maxWidth: '500px'}}>
                {pageList}
            </div>
            {user}
            <div className='d-flex m-2' style={{maxWidth: '500px'}}>
                {pageList}
            </div>
        </div>
    )
};
export default Users
