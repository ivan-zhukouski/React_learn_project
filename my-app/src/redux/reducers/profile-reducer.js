import {usersAPI} from "../../API/api";
import {isLoading} from "./users-reducer";

const ADD_NEW_POST = 'ADD_NEW_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_MY_PHOTO = 'SET_MY_PHOTO';

//actions
export const addPostActionCreator = (newText) => ({
    type: ADD_NEW_POST, newText
});
export const deletePostAC = (postId) => ({
    type: DELETE_POST, postId
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
});
export const setUserStatus = (status) => ({
    type: SET_USER_STATUS, status
});
export const setMyPhoto = (photo) => ({
    type: SET_MY_PHOTO, photo
});
//
//thunk
export const getUserProfileApi = (userId) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        const response = await usersAPI.getUserProfile(userId);
        dispatch(setUserProfile(response));
        dispatch(isLoading(false))
    }
};
export const getUserStatus = (userId) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        const response = await usersAPI.getUsersStatus(userId);
        dispatch(setUserStatus(response.data));
        dispatch(isLoading(false))
    }
};
export const updateUserStatus = (status) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        const response = await usersAPI.updateUserStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
            dispatch(isLoading(false))
        }
    }
};
export const updateMyPhoto = (photo) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        const response = await usersAPI.setAvatar(photo);
        if (response.data.resultCode === 0) {
            dispatch(setMyPhoto(response.data.data.photos));
            dispatch(isLoading(false))
        }
    }
};
//
const initialState = {
    postsData: [
        {id: 1, post: 'Hi, How are you?? Are you kidding me??aha', likeCount: 24},
        {id: 2, post: 'Have you read my message??', likeCount: 27},
    ],
    userProfile: null,
    userStatus: '',
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            const newPost = {
                id: 3,
                post: action.newText,
                likeCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost], // Like push
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: {...action.profile}
            };
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            };
        case SET_MY_PHOTO:
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photo}
            };
        default:
            return state
    }
};
export default profileReducer
