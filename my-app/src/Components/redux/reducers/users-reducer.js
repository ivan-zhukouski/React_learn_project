const FOLLOW = 'FOLLOW';
const REMOVE = 'REMOVE';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const PAGE_SIZE = 'PAGE_SIZE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';

//actions
export const followAC = (userId) => ( {
    type: FOLLOW,
    userId
});
export const removeAC = (userId) => ({
    type: REMOVE,
    userId
});
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
});
export const currentPageAC = (currentPage) => ({
    type: CURRENT_PAGE,
    currentPage
});
export const totalUsersCountAC = (totalUsers) => ({
    type: TOTAL_USERS_COUNT,
    totalUsers
});
//
const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: null,
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
        default:
            return state
    }
};
export default userReducer
