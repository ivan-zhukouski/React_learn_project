import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../redux/reducers/profile-reducer.js";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const postsData = props.postsData;
    const addNewPost = () => {
        props.dispatch(addPostActionCreator());
    };
    const onChangePost = (text) => {
        props.dispatch(updatePostTextActionCreator(text));
    };

    return (
       <MyPosts onChangePost={onChangePost}
                addNewPost={addNewPost}
                newPostText={props.newPostText}
                postsData={postsData} />
    )
};
export default MyPostsContainer
