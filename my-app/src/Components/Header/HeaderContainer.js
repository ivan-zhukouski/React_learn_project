import React from "react";
import {connect} from "react-redux";
import Header from "./Header"

const mapStateToProps = (state)=>{
    return{
        isLoading: state.usersData.isLoading
    }
};
export default connect(mapStateToProps)(Header);
