import React from "react";
import style from "./../Navbar.module.css"
import Friend from "./Friend/Friend";
const Friends = (props) => {
    let friend = props.friendsData.map(f => <Friend name ={f.name}/> );
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
