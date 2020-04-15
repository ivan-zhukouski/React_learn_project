import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileApi,
    getUserStatus,
    updateUserStatus,
    UserProfileType
} from "../../redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
type PropsType = {
    userId: number
    getUserProfileApi: (userId: number)=> void
    getUserStatus: (userId: number)=>void
    userStatus: string
    userProfile: UserProfileType
    updateUserStatus:()=>void
}
class ProfileContainer extends React.PureComponent<PropsType> {
    componentDidMount() {
        let userId = this.props.userId;
        this.props.getUserProfileApi(userId);
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     userStatus ={this.props.userStatus}
                     userProfile ={this.props.userProfile}
                     updateUserStatus ={this.props.updateUserStatus} />
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        userProfile: state.profileData.userProfile,
        userStatus: state.profileData.userStatus,
        userId: state.authData.id
    }
};
const actions = {
    getUserProfileApi,
    getUserStatus,
    updateUserStatus,
};
export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, actions)
)(ProfileContainer);
