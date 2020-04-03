import React from "react";
import {connect} from "react-redux";
import NavBar from "./Navbar";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {addPostActionCreator} from "../../redux/reducers/profile-reducer";

let mapStateToProps = (state) => {
    return {
        friendsData: state.friendsData.friendsData.friends,
    }
};
let mapDispatchToProps= (dispatch)=> {
    return {
        addNewPost: (newText)=>{
            dispatch(addPostActionCreator(newText))
        }
    }
};
const NavBarContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(NavBar);
export default NavBarContainer
