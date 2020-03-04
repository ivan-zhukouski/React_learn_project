import React from "react";
import style from "./Post.module.css"

const Post = (props) => {
    return(
        <div className={style.main_post_div}>
            <img className={style.ava} src = 'https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1608/tuktukdesign160800038.jpg'/>
            <div className={style.post}>
                {props.message}
            </div>
            <div className={style.like} >
                <img className={style.heart} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png'/>
                {props.likeCount}
            </div>
        </div>
    )
};
export default Post
