import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import userReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import {appReducer} from "./reducers/app-reducer";
import {friendsReducer} from "./reducers/friends-reducer";

const reducers = combineReducers({
    profileData: profileReducer,
    dialogData: dialogsReducer,
    sidebarData: sidebarReducer,
    usersData: userReducer,
    authData: authReducer,
    form: formReducer,
    appData: appReducer,
    friendsData: friendsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store
