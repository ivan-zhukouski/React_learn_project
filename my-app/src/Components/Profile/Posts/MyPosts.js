import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post.js"
import {addPostActionCreator, updatePostTextActionCreator} from "../../redux/reducers/profile-reducer.js";

const MyPosts = (props) => {
    const post = props.postsData.map( p => <Post key={p.id} message={p.post} likeCount = {p.likeCount} /> );
    const addNewPost = () => {
        props.dispatch(addPostActionCreator());
    };
    const onChangePost = (event) => {
        let text = event.target.value;
        props.dispatch(updatePostTextActionCreator(text));
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
