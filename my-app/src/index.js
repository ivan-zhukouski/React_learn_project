
import * as serviceWorker from './serviceWorker';
import state, {addPost, subscribe, updatePostText} from "./Components/redux/store"
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";
import React from "react";

const rerenderApplication = (state) => {
    const Application = <BrowserRouter>
        <App state={state} addPost={addPost} updatePostText={updatePostText} />
    </BrowserRouter>;
    ReactDOM.render(Application, document.getElementById('root'));
};
rerenderApplication(state);
subscribe(rerenderApplication);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
