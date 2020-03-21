import React from "react";
import {connect} from "react-redux";
import {currentPageAC, followAC, removeAC, setUsersAC, totalUsersCountAC} from "../redux/reducers/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalPage(response.data.totalCount)
            })
    }

    onPageChange = (page) => {
        this.props.changeCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    };

    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChange={this.onPageChange}
                   currentPage={this.props.currentPage}
                   usersData={this.props.usersData}
                   remove={this.props.remove}
                   follow={this.props.follow}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.usersData.users,
        currentPage: state.usersData.currentPage,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        remove: (userId) => {
            dispatch(removeAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        changeCurrentPage: (page) => {
            dispatch(currentPageAC(page))
        },
        setTotalPage: (total) => {
            dispatch(totalUsersCountAC(total))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

