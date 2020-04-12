import React, { FC } from "react";
import style from "./../Navbar.module.css"
import Friend from "./Friend/Friend";
import {FriendsType} from "../../../redux/reducers/friends-reducer";
type PropsType = {
    friendsData: Array<FriendsType>
}
const Friends:FC<PropsType> = (props) => {
    let friend = props.friendsData.map(f => <Friend key={f.id} name ={f.name}/> );
    return(
        <div>
            <h3>Friends</h3>
            <div className={style.friends_container}>
                <div>
                    {friend}
                </div>
            </div>
        </div>

    )
};
export default Friends
