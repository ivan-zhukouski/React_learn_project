import {authAPI} from "../../API/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
//actions
export const setAuthData = (id,email,login) => ({
    type: SET_AUTH_DATA, authData: {id,email,login}
});
export const updateMessage = (message) => ({
    type: UPDATE_MESSAGE, message
});
//
//thunk
export const getMyProfile = ()=>{
    return (dispatch)=>{
        authAPI.getMe()
            .then(data=>{
                let {id,email,login} = data.data;
                if(!data.data.id){
                    dispatch(updateMessage('You are NOT authorized'))
                } else {
                    dispatch(setAuthData(id,email,login));
                    dispatch(updateMessage(`Hallo ${data.data.login}`))
                }
            })
    }
};
//

const initialStore = {
    id: null,
    email: null,
    login: null,
    message: null,
    isAuth: false
};
const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
           return {
               ...state,
               ...action.authData,
               isAuth: true
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
