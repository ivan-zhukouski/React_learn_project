import {authAPI} from "../../API/api";
import {isLoading} from "./users-reducer";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const SET_EMAIL = 'SET_EMAIL';
//actions
export const setAuthData = (id, email, login, isAuth) => ({
    type: SET_AUTH_DATA, authData: {id, email, login, isAuth}
});
export const updateMessage = (message) => ({
    type: UPDATE_MESSAGE, message
});
//
//thunk
export const getMyProfile = () => {
    return async (dispatch) => {
        let response = await authAPI.getMe();
        let {id, email, login} = response.data;
        if (!response.data.id) {
            dispatch(updateMessage('You are NOT authorized'))
        } else {
            dispatch(setAuthData(id, email, login, true));
            dispatch(updateMessage(`Hallo ${response.data.login}`))
        }
    }
};
export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        const response = await authAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getMyProfile());
            dispatch(isLoading(false));
        } else {
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}));
        }
    }
};
export const logout = () => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        const response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false));
            dispatch(updateMessage('You are NOT authorized'));
            dispatch(isLoading(false));
        }
    }
};
//

const initialStore = {
    id: null,
    email: null,
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
            };
        case UPDATE_MESSAGE: {
            return {
                ...state,
                message: action.message
            }
        }
        case SET_EMAIL:
            return {
                ...state,
                email: action.email
            };
        default:
            return state
    }
};
export default authReducer
