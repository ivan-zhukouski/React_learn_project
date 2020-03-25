import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPage,
    follow,
    isLoading,
    remove,
    setUsers,
    setTotalPage, isFollowing,
} from "../../redux/reducers/users-reducer";
import Users from "./Users";
import {Route} from "react-router-dom";
import {setUserProfile} from "../../redux/reducers/profile-reducer";
import {usersAPI as userAPI} from "../../API/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.isLoading(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalPage(data.totalCount);
                this.props.isLoading(false)
            });

    }

    onPageChange = (page) => {
        this.props.changeCurrentPage(page);
        this.props.isLoading(true);
        userAPI.changeUserPage(page, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.isLoading(false)
            })
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
                                            remove={this.props.remove}
                                            follow={this.props.follow}
                                            isFollowingProgress={this.props.isFollowingProgress}
                                            isFollowing={this.props.isFollowing}
                       />}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.usersData.users,
        currentPage: state.usersData.currentPage,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        userProfile: state.profileData.userProfile,
        isFollowingProgress: state.usersData.isFollowingProgress
    }
};
const actions = {
    follow,
    remove,
    setUsers,
    changeCurrentPage,
    setTotalPage,
    isLoading,
    setUserProfile,
    isFollowing

};
export default connect(mapStateToProps, actions)(UsersContainer);

