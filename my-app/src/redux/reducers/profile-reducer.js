import {usersAPI} from "../../API/api";
import {isLoading} from "./users-reducer";

const ADD_NEW_POST = 'ADD_NEW_POST';
const SET_USER_PROFILE ='SET_USER_PROFILE';
const SET_USER_STATUS='SET_USER_STATUS';

//actions
export const addPostActionCreator = (newText)=> ( {
    type: ADD_NEW_POST, newText
});
export const setUserProfile = (profile)=>({
    type: SET_USER_PROFILE, profile
});
export const setUserStatus = (status) =>({
    type: SET_USER_STATUS, status
});
//
//thunk
export const getUserProfileApi = (userId)=> {
    return (dispatch)=>{
        dispatch(isLoading(true));
        usersAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response));
                dispatch(isLoading(false))
            })
    }
};
export const getUserStatus = (userId) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        usersAPI.getUsersStatus(userId)
            .then(response=>{
                dispatch(setUserStatus(response.data));
                dispatch(isLoading(false))
            })
    }
};
export const updateUserStatus = (status) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        usersAPI.updateUserStatus(status)
            .then(response=>{
                if(response.data.resultCode === 0){
                    dispatch(setUserStatus(status));
                    dispatch(isLoading(false))
                }
            })
    }
};
//
const initialState ={
    postsData: [
        {id:1, post:'Hi, How are you?? Are you kidding me??aha', likeCount: 24 },
        {id:2, post:'Have you read my message??', likeCount: 27},
    ],
    userProfile: null,
    userStatus: '',
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            const newPost = {
                id:3,
                post: action.newText,
                likeCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost], // Like push
            };
        case SET_USER_PROFILE:
            return{
                ...state,
                userProfile: {...action.profile}
            };
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status
            };
        default:
            return state
    }
};
export default profileReducer
