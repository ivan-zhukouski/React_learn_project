const SET_AUTH_DATA = 'SET_AUTH_DATA';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export const setAuthData = (id,email,login) => ({
    type: SET_AUTH_DATA, authData: {id,email,login}
});
export const updateMessage = (message) => ({
    type: UPDATE_MESSAGE, message
});


const initialStore = {
    id: null,
    email: null,
    login: null,
    message: null
};
const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
           return {
               ...state,
               ...action.authData
            };
        case UPDATE_MESSAGE:{
            return{
                ...state,
                message: action.message
            }
        }
        default:
            return state
    }
};
export default authReducer
