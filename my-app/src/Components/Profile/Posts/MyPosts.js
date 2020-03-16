import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post.js"
const MyPosts = (props) => {
    const post = props.postsData.map( p => <Post key={p.id} message={p.post} likeCount = {p.likeCount} /> );
    const addNewPost = () => {
        if(props.newPostText !==''){
            props.addNewPost();
        } else {
            return false
        }
    };
    const onChangePost = (event) => {
        let text = event.target.value;
        props.onChangePost(text);
    };

    return (
        <div className={style.myPost}>
            <div>
                My posts here!
            </div>
            <div>
                <textarea onChange={onChangePost} value={props.newPostText} />
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            {post}
        </div>

    )
};
export default MyPosts
