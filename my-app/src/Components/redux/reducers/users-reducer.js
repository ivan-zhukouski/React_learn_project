const FOLLOW = 'FOLLOW';
const REMOVE = 'REMOVE';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const PAGE_SIZE = 'PAGE_SIZE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const LOADING = 'LOADING';
const USER_PROFILE_ID = 'USER_PROFILE_ID';

//actions
export const follow = (userId) => ( {
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
export const isLoading = (loading)=> ({
    type: LOADING,
    loading
});
export const setUserProfileId = (setUserId)=> ({
    type: USER_PROFILE_ID,
    setUserId
});

//
const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: null,
    isLoading: null,
    userProfileID: 2,
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user, followed:true
                        }
                    }
                    return user
                })

            };
        case REMOVE:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {
                            ...user, followed: false
                        }
                    }
                    return user
                })
            };
        case SET_USERS :
            return{
                ...state,
                users: [...action.users]
            };
        case CURRENT_PAGE :
            return{
                ...state,
                currentPage: action.currentPage
            };
        case PAGE_SIZE :
            return{
                ...state,
               pageSize: action.pageSize
            };
        case TOTAL_USERS_COUNT :
            return{
                ...state,
                totalUsersCount: action.totalUsers
            };
        case LOADING:
            return{
                ...state,
                isLoading: action.loading
            };
        case USER_PROFILE_ID:
            return{
                ...state,
                userProfileID: action.setUserId
            };
        default:
            return state
    }
};
export default userReducer
