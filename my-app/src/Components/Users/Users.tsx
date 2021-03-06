import React, {FC} from "react";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../redux/reducers/users-reducer";
type PropsType = {
    usersData: Array<UserType>
    removeUser:(userId:number)=>void
    followUser:(userId:number)=>void
    isFollowingProgress:boolean
    currentPage:number
    pageSize:number
    totalUsersCount:number
    onPageChange:(page:number)=> void
}
const Users: FC<PropsType> = (props) => {
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
        </div>
    )
};
export default Users
