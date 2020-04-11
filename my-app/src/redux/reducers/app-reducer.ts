import {getMyProfile} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

    //actions
type SetInitializedType = {
    type: typeof SET_INITIALIZED
}
export const setInitialized = ():SetInitializedType => ({
    type: SET_INITIALIZED
});
//
//thunk
export const initializeApp = () => (dispatch:any) => {
 const promise = dispatch(getMyProfile());
 Promise.all([promise]).then(()=>{
     dispatch(setInitialized())
 })
};
//

const initialState = {
    initialized: false
};
type InitialStateType = typeof initialState
export const appReducer = (state = initialState, action:any ):InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state
    }
};
