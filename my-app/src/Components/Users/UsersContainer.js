import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPage,
    setUsers,
    setTotalPage,getUsers, removeUser, followUser,
} from "../../redux/reducers/users-reducer";
import Users from "./Users";
import {Route} from "react-router-dom";
import {setUserProfile} from "../../redux/reducers/profile-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getIsFollowingProgress,
    getPageSize,
    getTotalUsersCount,
    getUserProfile,
    getUsersData
} from "../../redux/selectors/user-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }
    onPageChange = (page) => {
        this.props.changeCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
    };
    render() {
        return (
            <>
                <Route exact path='/users'
                       render={() => <Users totalUsersCount={this.props.totalUsersCount}
                                            pageSize={this.props.pageSize}
                                            onPageChange={this.onPageChange}
                                            currentPage={this.props.currentPage}
                                            usersData={this.props.usersData}
                                            removeUser={this.props.removeUser}
                                            followUser={this.props.followUser}
                                            isFollowingProgress={this.props.isFollowingProgress}
                       />}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        userProfile: getUserProfile(state),
        isFollowingProgress: getIsFollowingProgress(state),
    }
};
const actions = {
    setUsers,
    changeCurrentPage,
    setTotalPage,
    setUserProfile,
    getUsers,
    removeUser,
    followUser,

};
export default compose(
    connect(mapStateToProps, actions),
    withAuthRedirect
)(UsersContainer)


