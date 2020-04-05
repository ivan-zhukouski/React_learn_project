import React from "react";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const pageList = pages.map((p, index) => {
        return (
            <Paginator key={index}
                       page={p}
                       onPageChange={props.onPageChange}
                       currentPage={props.currentPage} />
        )
    });
    const user = props.usersData.map(u => {
            return (
               <User key={u.id} user={u}
                     isFollowingProgress={props.isFollowingProgress}
                     removeUser={props.removeUser}
                     followUser={props.followUser} />
            )
        }
    );
    return (
        <div>
            <div className='d-flex m-2' style={{maxWidth: '500px'}}>
                {pageList}
            </div>
            {user}
            <div className='d-flex m-2' style={{maxWidth: '500px'}}>
                {pageList}
            </div>
        </div>
    )
};
export default Users
