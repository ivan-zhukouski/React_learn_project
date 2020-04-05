import React from "react";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
    const user = props.usersData.map(u => {
            return (
                <User key={u.id} user={u}
                      isFollowingProgress={props.isFollowingProgress}
                      removeUser={props.removeUser}
                      followUser={props.followUser}/>
            )
        }
    );
    return (
        <div>
            <Paginator onPageChange={props.onPageChange}
                       currentPage={props.currentPage}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>
            <div>
                {user}
            </div>

            <Paginator onPageChange={props.onPageChange}
                       currentPage={props.currentPage}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>
        </div>
    )
};
export default Users
