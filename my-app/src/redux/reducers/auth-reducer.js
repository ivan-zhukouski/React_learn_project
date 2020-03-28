import {authAPI} from "../../API/api";
import {isLoading} from "./users-reducer";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const SET_EMAIL = 'SET_EMAIL';
//actions
export const setAuthData = (id,email,login) => ({
    type: SET_AUTH_DATA, authData: {id,email,login}
});
export const updateMessage = (message) => ({
    type: UPDATE_MESSAGE, message
});
export const setEmail = (email)=> ({
    type: SET_EMAIL, email
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
export const login = (email,password) => {
    return (dispatch)=>{
        dispatch(isLoading(true));
        authAPI.login(email, password)
            .then(response=>{
                if(response.data.resultCode === 0){
                    getMyProfile();
                    dispatch(isLoading(false));
                }
            })
    }
};
//

const initialStore = {
    id: null,
    email: null,
    password: null,
    login: null,
    message: null,
    isAuth: false,

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
        case SET_EMAIL:
            return{
                ...state,
                email: action.email
            };
        default:
            return state
    }
};
export default authReducer
