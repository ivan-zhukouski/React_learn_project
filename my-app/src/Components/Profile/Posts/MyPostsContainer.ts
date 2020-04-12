
import {addPostActionCreator} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        postsData: state.profileData.postsData,
    }
};
let mapDispatchToProps= (dispatch:any)=> {
    return {
        addNewPost: (newText:string)=>{
            dispatch(addPostActionCreator(newText))
        }
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer
