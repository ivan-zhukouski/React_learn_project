import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import userReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import {appReducer} from "./reducers/app-reducer";
import {friendsReducer} from "./reducers/friends-reducer";

const reducers = combineReducers({
    profileData: profileReducer,
    dialogData: dialogsReducer,
    usersData: userReducer,
    authData: authReducer,
    form: formReducer,
    appData: appReducer,
    friendsData: friendsReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

window.__store__ = store;
export default store
