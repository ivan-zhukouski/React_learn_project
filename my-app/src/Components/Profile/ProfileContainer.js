import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../redux/reducers/profile-reducer";
import * as axios from "axios";
import {Route, withRouter} from "react-router-dom";
import {isLoading} from "../redux/reducers/users-reducer";

class ProfileContainer extends React.Component{
    componentDidMount() {
        this.props.isLoading(true);
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
                this.props.isLoading(false);
            })
    }
    render(){
        return(
            <>
             <Route path='/profile' render={()=> <Profile {...this.props} userProfile={this.props.userProfile}  />}/>
            </>
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
    isLoading,
};
const UsersProfileWithRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps,actions)(UsersProfileWithRouter)
