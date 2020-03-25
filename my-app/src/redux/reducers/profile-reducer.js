const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE ='SET_USER_PROFILE';

//actions
export const addPostActionCreator = ()=> ( {
    type: ADD_NEW_POST,
});
export const updatePostTextActionCreator = (newText) => ({
    type: UPDATE_POST_TEXT, newText: newText,
});
export const setUserProfile = (profile)=>({
    type: SET_USER_PROFILE, profile
});
//
const initialState ={
    postsData: [
        {id:1, post:'Hi, How are you?? Are you kidding me??aha', likeCount: 24 },
        {id:2, post:'Have you read my message??', likeCount: 27},
    ],
    newPostText: '',
    userProfile: null,
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            const newPost = {
                id:3,
                post: state.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost], // Like push
                newPostText: ''
            };
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:{
            return{
                ...state,
                userProfile: {...action.profile}
            }
        }
        default:
            return state
    }
};
export default profileReducer
