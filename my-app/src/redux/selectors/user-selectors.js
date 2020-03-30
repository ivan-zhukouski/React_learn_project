export const getUsersData = (state) => {
    return state.usersData.users
};
export const getCurrentPage = (state) => {
    return state.usersData.currentPage
};
export const getPageSize = (state) => {
    return state.usersData.pageSize
};
export const getTotalUsersCount = (state) => {
    return state.usersData.totalUsersCount
};
export const getUserProfile = (state) => {
    return state.usersData.userProfile
};
export const getIsFollowingProgress = (state) =>{
    return state.usersData.isFollowingProgress
};
