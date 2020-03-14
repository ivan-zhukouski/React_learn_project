import React, {createRef} from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post.js"

const MyPosts = (props) => {
    const post = props.postsData.map( p => <Post message={p.post} likeCount = {p.likeCount} /> );
    const newPostRef = createRef();
    const addNewPost = () => {
        props.dispatch({type:'ADD_NEW_POST'});
    };
    const onChangePost = () => {
        let text = newPostRef.current.value;
        const action = {type: 'UPDATE_POST_TEXT', newText: text};
        props.dispatch(action);
    };

    return (
        <div className={style.myPost}>
            <div>
                My posts here!
            </div>
            <div>
                <textarea ref={newPostRef} onChange={onChangePost} value={props.newPostText} />
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            {post}
        </div>

    )
};
export default MyPosts
