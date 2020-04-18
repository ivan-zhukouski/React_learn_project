import {authAPI, securityApi} from "../../API/api";
import {isLoading, IsLoadingType} from "./users-reducer";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const SET_CAPTCHA_IMG = 'SET_CAPTCHA_IMG';
//actions
type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthDataType = {
    type: typeof SET_AUTH_DATA
    authData: AuthDataType
}
export const setAuthData = (id:number | null, email:string | null, login:string | null, isAuth:boolean):SetAuthDataType => ({
    type: SET_AUTH_DATA, authData: {id, email, login, isAuth}
});
type UpdateMessageType = {
    type: typeof UPDATE_MESSAGE
    message: string
}
export const updateMessage = (message:string):UpdateMessageType => ({
    type: UPDATE_MESSAGE, message
});
type SetCaptchaImgType = {
    type: typeof SET_CAPTCHA_IMG
    payload: string
}
export const setCaptchaImg = (captcha:string):SetCaptchaImgType => ({
    type: SET_CAPTCHA_IMG, payload: captcha
});

type ActionsTypes = SetCaptchaImgType |
    UpdateMessageType | SetAuthDataType | IsLoadingType
//
//thunk
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getMyProfile = ():ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.getMe();
        let {id, email, login} = response.data;
        if (!response.data.id) {
            dispatch(updateMessage('You are NOT authorized'));
        } else {
            dispatch(setAuthData(id, email, login, true));
            dispatch(updateMessage(`Hallo ${response.data.login}`))
        }
    }
};
export const login = (email:string, password:string, rememberMe:boolean, captcha:string):ThunkType => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        const response = await authAPI.login(email, password, rememberMe,captcha);
        if (response.data.resultCode === 0) {
            dispatch(getMyProfile());
            dispatch(isLoading(false));
        } else {
            if(response.data.resultCode === 10) {
                dispatch(getCaptchaImg());
            }
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            // @ts-ignore
            dispatch(stopSubmit('login', {_error: message}));
        }
    }
};
export const logout = ():ThunkType => {
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

const getCaptchaImg = ():ThunkType => {
    return async (dispatch) => {
        let response = await securityApi.getCaptcha();
        dispatch(setCaptchaImg(response.data.url))
    }
};

//

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    message: null as string | null,
    isAuth: false,
    captchaImg: null as string | null
};
type InitialStateType = typeof initialState
const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
        case SET_CAPTCHA_IMG:
            return {
                ...state,
                captchaImg: action.payload
            };
        default:
            return state
    }
};
export default authReducer
