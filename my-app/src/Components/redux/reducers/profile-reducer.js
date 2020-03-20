const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

//actions
export const addPostActionCreator = ()=> ( {
    type: ADD_NEW_POST,
});
export const updatePostTextActionCreator = (newText) => ({
    type: UPDATE_POST_TEXT, newText: newText,
});
//
const initialState ={
    postsData: [
        {id:1, post:'Hi, How are you?? Are you kidding me??aha', likeCount: 24 },
        {id:2, post:'Have you read my message??', likeCount: 27},
    ],
    newPostText: '',
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
                postsData: [...state.postsData, newPost], // заменяет push
                newPostText: ''
            };
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state
    }
};
export default profileReducer
