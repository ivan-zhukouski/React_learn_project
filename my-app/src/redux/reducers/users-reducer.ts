import {usersAPI as userAPI} from "../../API/api";
import {PhotosType} from "../../types/types";

const FOLLOW = 'FOLLOW';
const REMOVE = 'REMOVE';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const PAGE_SIZE = 'PAGE_SIZE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const LOADING = 'LOADING';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';


//actions
type FollowType = {
    type: typeof FOLLOW
    userId: number
}
export const follow = (userId:number):FollowType => ({
    type: FOLLOW,
    userId
});
type RemoveType = {
    type: typeof REMOVE
    userId: number
}
export const remove = (userId: number): RemoveType => ({
    type: REMOVE,
    userId
});
export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    photos: PhotosType
}
type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users:Array<UserType>):SetUsersType => ({
    type: SET_USERS,
    users
});
type ChangeCurrentPageType = {
    type: typeof CURRENT_PAGE
    currentPage: number
}
export const changeCurrentPage = (currentPage:number):ChangeCurrentPageType => ({
    type: CURRENT_PAGE,
    currentPage
});
type SetTotalPageType = {
    type: typeof TOTAL_USERS_COUNT
    totalUsers: number
}
export const setTotalPage = (totalUsers:number):SetTotalPageType => ({
    type: TOTAL_USERS_COUNT,
    totalUsers
});
type IsLoadingType = {
    type: typeof LOADING
    loading: boolean
}
export const isLoading = (loading:boolean):IsLoadingType => ({
    type: LOADING,
    loading
});
type IsFollowingType = {
    type: typeof FOLLOWING_PROGRESS
    following: boolean
    userId: number
}
export const isFollowing = (following: boolean, userId: number):IsFollowingType => ({
    type: FOLLOWING_PROGRESS,
    following, userId
});
//
//thunk
export const getUsers = (currentPage:number, pageSize:number) => {
    return async (dispatch:any) => {
        dispatch(isLoading(true));
        const data = await userAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(data.items));
        dispatch(setTotalPage(data.totalCount));
        dispatch(isLoading(false))
    }
};
export const removeUser = (userId:number) => {
    return async (dispatch:any) => {
        dispatch(isFollowing(true, userId));
        const data = await userAPI.removeUser(userId);
        if (data.resultCode === 0) {
            dispatch(remove(userId))
        }
        dispatch(isFollowing(false, userId));
    }
};
export const followUser = (userId:number) => {
    return (dispatch:any) => {
        dispatch(isFollowing(true, userId));
        userAPI.followUser(userId)
            .then((data: { resultCode: number; }) => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(isFollowing(false, userId));
            });
    }
};
//
const initialState = {
    users: [] as Array<UserType>,
    currentPage: 1 as number,
    pageSize: 5 as number,
    totalUsersCount: null as number | null,
    isLoading: null as boolean | null,
    isFollowingProgress: [] as Array<number>, // array of users ids
};
type InitialStateType = typeof initialState
const userReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: true
                        }
                    }
                    return user
                })
            };
        case REMOVE:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: false
                        }
                    }
                    return user
                })
            };
        case SET_USERS :
            return {
                ...state,
                users: [...action.users]
            };
        case CURRENT_PAGE :
            return {
                ...state,
                currentPage: action.currentPage
            };
        case PAGE_SIZE :
            return {
                ...state,
                pageSize: action.pageSize
            };
        case TOTAL_USERS_COUNT :
            return {
                ...state,
                totalUsersCount: action.totalUsers
            };
        case LOADING:
            return {
                ...state,
                isLoading: action.loading
            };
        case FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingProgress: action.following
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(id => id !== action.userId)
            };
        default:
            return state
    }
};
export default userReducer
