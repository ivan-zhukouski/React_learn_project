import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../redux/reducers/profile-reducer";

class ProfileContainer extends React.Component{
    render(){
        return(
            <Profile {...this.props} />
        )
    }
}
const mapStateToProps = (state) => {
    return{
        userProfile: state.profileData.userProfile
    }
};
const actions ={
    setUserProfile,
};
export default connect(mapStateToProps,actions)(ProfileContainer)
