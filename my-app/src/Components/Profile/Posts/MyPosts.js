import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post.js"

const MyPosts = (props) => {
    const post = props.postsData.map( p => <Post message={p.post} likeCount = {p.likeCount} /> );

    return (
        <div className={style.myPost}>
            <div>
                My posts here!
            </div>
            <div>
                <textarea>
                </textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {post}
        </div>

    )
};
export default MyPosts
