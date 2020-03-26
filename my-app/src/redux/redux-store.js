import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import userReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    profileData: profileReducer,
    dialogData: dialogsReducer,
    sidebarData: sidebarReducer,
    usersData: userReducer,
    authData: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store
