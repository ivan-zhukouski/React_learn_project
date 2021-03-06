import React, { FC } from "react";
import style from "./Post.module.css"
import user_img from "../../../../assets/images/user_item.png";

type PropsType = {
    message:string
    likeCount: number
}

const Post:FC<PropsType> = (props) => {
    return(
        <div className={style.main_post_div}>
            <img alt='ss' className={style.ava} src = {user_img}/>
            <div className={style.post}>
                {props.message}
            </div>
            <div className={style.like} >
                <img alt='ss' className={style.heart} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png'/>
                {props.likeCount}
            </div>
        </div>
    )
};
export default Post
