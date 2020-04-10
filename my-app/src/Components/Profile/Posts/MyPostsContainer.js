import React from "react";
import {addPostActionCreator} from "../../../redux/reducers/profile-reducer";
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
        addNewPost: (newText)=>{
            dispatch(addPostActionCreator(newText))
        }
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer
