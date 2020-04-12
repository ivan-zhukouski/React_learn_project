
import {connect} from "react-redux";
import NavBar from "./Navbar";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {addPostActionCreator} from "../../redux/reducers/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state/*: AppStateType*/) => {
    return {
        friendsData: state.friendsData.friendsData.friends,
    }
};
let mapDispatchToProps= (dispatch/*:any*/)=> {
    return {
        addNewPost: (newText/*:string*/)=>{
            dispatch(addPostActionCreator(newText))
        }
    }
};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(NavBar);
