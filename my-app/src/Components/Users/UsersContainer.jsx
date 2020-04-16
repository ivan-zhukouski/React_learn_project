import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPage,
    setUsers,
    setTotalPage,getUsers, removeUser, followUser, UserType,
} from "../../redux/reducers/users-reducer";
import Users from "./Users";
import {Route, withRouter} from "react-router-dom";
import {setUserProfile, UserProfileType} from "../../redux/reducers/profile-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getIsFollowingProgress,
    getPageSize,
    getTotalUsersCount,
    getUserProfile,
    getUsersData
} from "../../redux/selectors/user-selectors";
import UserProfileContainer from "./UserProfileContainer";
import {AppStateType} from "../../redux/redux-store";
/*
type OwnPropsType = {
    title:string
}
type MapStatePropsType = {
    currentPage:number
    pageSize:number
    isFollowingProgress:boolean
    totalUsersCount:number
    usersData: Array<UserType>
    userProfile: Array<UserProfileType>
}
type MapDispatchPropsType = {
    getUsers: (currentPage:number,pageSize:number)=>void
    changeCurrentPage:(page:number)=>void
    removeUser:(userId:number)=>void
    followUser:(userId:number)=>void
}*/
/*type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType*/
class UsersContainer extends React.Component/*<PropsType>*/ {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }
    onPageChange = (page/*:number*/) => {
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
                <Route exact path='/users/profile/:userId?'
                       render={() => <UserProfileContainer/>}/>
            </>
        )
    }
}

const mapStateToProps = (state/*:AppStateType*/) => {
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
    changeCurrentPage,
    getUsers,
    removeUser,
    followUser,

};
export default compose(
    connect/*<MapStatePropsType, MapDispatchPropsType,OwnPropsType,AppStateType>*/(mapStateToProps, {
        changeCurrentPage,
        getUsers,
        removeUser,
        followUser,

    }),
    withAuthRedirect,
    withRouter,
)(UsersContainer)


