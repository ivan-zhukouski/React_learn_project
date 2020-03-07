import React from "react";
import style from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className={style.ava}>
            <div>
                <img className={style.ava_img}
                     src="https://i.pinimg.com/originals/bd/16/3a/bd163a127b3ee713c3d0182fb96c6bbe.jpg" alt="ava"/>
            </div>
        </div>
    )
};
export default Avatar
