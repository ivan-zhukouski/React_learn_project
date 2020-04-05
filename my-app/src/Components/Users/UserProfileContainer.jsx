import React from "react";
import {connect} from "react-redux";
import {getUserProfileApi, getUserStatus} from "../../redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import UserProfile from "./UserProfile";

class UserProfileContainer extends React.PureComponent {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfileApi(userId);
        this.props.getUserStatus(userId)
    }
    render() {
        console.log(this.props);
        return (
            <UserProfile {...this.props}
                         userStatus={this.props.userStatus}
                         userExactProfile={this.props.userExactProfile}
            />

        )
    }
}

const mapStateToProps = (state) => {
    return {
        userExactProfile: state.profileData.userProfile,
        userStatus: state.profileData.userStatus,
    }
};
const actions = {
    getUserProfileApi,
    getUserStatus,
};
export default compose(
    withRouter,
    connect(mapStateToProps, actions),
)(UserProfileContainer);
