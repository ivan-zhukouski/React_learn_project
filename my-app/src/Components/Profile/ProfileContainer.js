import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileApi, getUserStatus, updateUserStatus} from "../../redux/reducers/profile-reducer";
import {Route, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.PureComponent {
    componentDidMount() {
        let userId = this.props.userId;

        this.props.getUserProfileApi(userId);
        this.props.getUserStatus(userId)
    }
    render() {
        return (
          <Profile {...this.props}
                                              userStatus={this.props.userStatus}
                                              userProfile={this.props.userProfile}
                                              updateUserStatus={this.props.updateUserStatus} />

        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profileData.userProfile,
        userStatus: state.profileData.userStatus,
        userId: state.authData.id
    }
};
const actions = {
    getUserProfileApi,
    getUserStatus,
    updateUserStatus
};
export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, actions),
)(ProfileContainer);
