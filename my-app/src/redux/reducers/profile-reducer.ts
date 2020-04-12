import {usersAPI} from "../../API/api";
import {isLoading} from "./users-reducer";
import {PhotosType} from "../../types/types";

const ADD_NEW_POST = '/PROFILE/ADD_NEW_POST';
const SET_USER_PROFILE = '/PROFILE/SET_USER_PROFILE';
const SET_USER_STATUS = '/PROFILE/SET_USER_STATUS';
const DELETE_POST = '/PROFILE/DELETE_POST';
const SET_MY_PHOTO = '/PROFILE/SET_MY_PHOTO';

//actions
type AddPostACType = {
    type: typeof ADD_NEW_POST, newText: string
}
export const addPostActionCreator = (newText:string): AddPostACType => ({
    type: ADD_NEW_POST, newText
});
type DeletePostACType = {
    type: typeof DELETE_POST, postId: number
}
export const deletePostAC = (postId:number): DeletePostACType => ({
    type: DELETE_POST, postId
});
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE, profile: UserProfileType
}
export const setUserProfile = (profile:UserProfileType):SetUserProfileType => ({
    type: SET_USER_PROFILE, profile
});
type SetUserStatusType = {
    type: typeof SET_USER_STATUS, status: string
}
export const setUserStatus = (status:string):SetUserStatusType => ({
    type: SET_USER_STATUS, status
});
type SetMyPhoto = {
    type: typeof SET_MY_PHOTO, photos: PhotosType
}
export const setMyPhoto = (photos:PhotosType):SetMyPhoto => ({
    type:SET_MY_PHOTO, photos
});
//
//thunk
export const getUserProfileApi = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(isLoading(true));
        const response = await usersAPI.getUserProfile(userId);
        dispatch(setUserProfile(response));
        dispatch(isLoading(false))
    }
};
export const getUserStatus = (userId:number) => {
    return async (dispatch:any) => {
        dispatch(isLoading(true));
        const response = await usersAPI.getUsersStatus(userId);
        dispatch(setUserStatus(response.data));
        dispatch(isLoading(false))
    }
};
export const updateUserStatus = (status:any) => {
    return async (dispatch:any) => {
        dispatch(isLoading(true));
        const response = await usersAPI.updateUserStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
            dispatch(isLoading(false))
        }
    }
};
export const updateMyPhoto = (photo:any) => {
    return async (dispatch:any) => {
        dispatch(isLoading(true));
        const response = await usersAPI.setAvatar(photo);
        if (response.data.resultCode === 0) {
            dispatch(setMyPhoto(response.data.data.photos));
            dispatch(isLoading(false))
        }
    }
};
//
export type PostDataType = {
    id: number
    post: string
    likeCount: number
}
type ContactsType = {
    github:string
    vk:string
    facebook:string
    instagram:string
    twitter:string
    website:string
    youtube:string
    mainLink:string
}

export type UserProfileType = {
    userId:number
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName:string
    contacts:ContactsType
    photos: PhotosType
}
const initialState = {
    postsData: [
        {id: 1, post: 'Hi, How are you?? Are you kidding me??aha', likeCount: 24},
        {id: 2, post: 'Have you read my message??', likeCount: 27},
    ] as Array<PostDataType>,
    userProfile: null as UserProfileType | null,
    userStatus: '',
};
type InitialStateType = typeof initialState
const profileReducer = (state = initialState, action:any): InitialStateType => {
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
                userProfile: {...state.userProfile, photos: action.photo} as UserProfileType
            };
        default:
            return state
    }
};
export default profileReducer
