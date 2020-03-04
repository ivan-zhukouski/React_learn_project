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
            <Post message='Hi, How are you??' likeCount = '24' />
            <Post message='Have you read my message???' likeCount = '15' />
        </div>

    )
};
export default MyPosts
