import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../redux/reducers/profile-reducer.js";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profileData.postsData,
        newPostText: state.profileData.newPostText,
    }
};
let mapDispatchToProps= (dispatch)=> {
    return {
        onChangePost: (text)=>{
            dispatch(updatePostTextActionCreator(text))
        },
        addNewPost: ()=>{
            dispatch(addPostActionCreator())
        }
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer
