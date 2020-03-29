import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post.jsx"
import {Field, reduxForm} from "redux-form";
const MyPosts = (props) => {
    const post = props.postsData.map( p => <Post key={p.id} message={p.post} likeCount = {p.likeCount} /> );

    const onSubmit = (postData) => {
        console.log(postData);
        props.addNewPost(postData.newPost);
    };
    return (
        <div className={style.myPost}>
            <div>
                My posts here!
            </div>
            <PostFieldRedux onSubmit={onSubmit}/>
            {post}
        </div>

    )
};
const PostField = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPost'} component={'input'} type={'text'} />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};
const PostFieldRedux = reduxForm({
    form: 'addPostForm'
})(PostField);
export default MyPosts
