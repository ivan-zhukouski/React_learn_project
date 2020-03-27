import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/reducers/profile-reducer";
import {Route, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <>
                <Route path='/profile' render={() => <Profile {...this.props} userProfile={this.props.userProfile}/>}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profileData.userProfile,
    }
};
const actions = {
    getUserProfile
};
export default compose(
    connect(mapStateToProps, actions),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
