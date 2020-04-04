import {getMyProfile} from "./auth-reducer";

const SET_INITIALIZED ='SET_INITIALIZED';

    //actions
export const setInitialized = () => ({
    type: SET_INITIALIZED
});
//
//thunk
export const initializeApp = () => (dispatch) => {
 const promise = dispatch(getMyProfile());
 Promise.all([promise]).then(()=>{
     dispatch(setInitialized())
 })
};
//

const initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action ) => {
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
