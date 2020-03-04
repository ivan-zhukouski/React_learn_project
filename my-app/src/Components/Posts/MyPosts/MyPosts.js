import React from "react";
import style from "./MyPosts.module.css"
import Post from "../Post.js"

const MyPosts = () => {
    return (
        <div className={style.my_posts}>
            <div>
                My posts here!
            </div>
            <div>
                <textarea>
                </textarea>
                <button>Add post</button>
            </div>
            <Post/>
        </div>

    )
};
export default MyPosts
