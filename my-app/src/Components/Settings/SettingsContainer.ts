import React from "react";
import {updateMyPhoto} from "../../redux/reducers/profile-reducer";
import {connect} from "react-redux";
import Settings from "./Settings";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType)=> {
    return {

    }
};

const actions = {
    updateMyPhoto
};

export default connect(mapStateToProps,actions)(Settings)
