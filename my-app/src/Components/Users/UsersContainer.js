import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPage,
    follow,
    isLoading,
    remove,
    setUsers,
    setTotalPage,
} from "../redux/reducers/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import {Route} from "react-router-dom";
import {setUserProfile} from "../redux/reducers/profile-reducer";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.isLoading(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalPage(response.data.totalCount);
                this.props.isLoading(false)
            });

    }

    onPageChange = (page) => {
        this.props.changeCurrentPage(page);
        this.props.isLoading(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.isLoading(false)
            })
    };
    render() {
        return (
            <>
                <Route exact path='/users'
                       render={()=> <Users totalUsersCount={this.props.totalUsersCount}
                                           pageSize={this.props.pageSize}
                                           onPageChange={this.onPageChange}
                                           currentPage={this.props.currentPage}
                                           usersData={this.props.usersData}
                                           remove={this.props.remove}
                                           follow={this.props.follow}
                                           />} />
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

};
export default connect(mapStateToProps, actions)(UsersContainer);

