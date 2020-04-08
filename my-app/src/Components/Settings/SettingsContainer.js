import React from "react";
import {updateMyPhoto} from "../../redux/reducers/profile-reducer";
import {connect} from "react-redux";
import Settings from "./Settings";

const mapStateToProps = (state)=> {
    return {

    }
};

const actions = {
    updateMyPhoto
};

export default connect(mapStateToProps,actions)(Settings)
