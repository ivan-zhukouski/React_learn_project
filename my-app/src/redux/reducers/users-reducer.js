import {usersAPI as userAPI} from "../../API/api";

const FOLLOW = 'FOLLOW';
const REMOVE = 'REMOVE';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const PAGE_SIZE = 'PAGE_SIZE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const LOADING = 'LOADING';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';


//actions
export const follow = (userId) => ({
    type: FOLLOW,
    userId
});
export const remove = (userId) => ({
    type: REMOVE,
    userId
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export const changeCurrentPage = (currentPage) => ({
    type: CURRENT_PAGE,
    currentPage
});
export const setTotalPage = (totalUsers) => ({
    type: TOTAL_USERS_COUNT,
    totalUsers
});
export const isLoading = (loading) => ({
    type: LOADING,
    loading
});
export const isFollowing = (following, userId) => ({
    type: FOLLOWING_PROGRESS,
    following, userId
});
//
//thunk
export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        const data = await userAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(data.items));
        dispatch(setTotalPage(data.totalCount));
        dispatch(isLoading(false))
    }
};
export const removeUser = (userId) => {
    return async (dispatch) => {
        dispatch(isFollowing(true, userId));
        const data = await userAPI.removeUser(userId)
        if (data.resultCode === 0) {
            dispatch(remove(userId))
        }
        dispatch(isFollowing(false, userId));
    }
};
export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(isFollowing(true, userId));
        userAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(isFollowing(false, userId));
            });
    }
};
//
const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: null,
    isLoading: null,
    userProfileID: 2,
    isFollowingProgress: [],
};
const userReducer = (state = initialState, action) => {
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
