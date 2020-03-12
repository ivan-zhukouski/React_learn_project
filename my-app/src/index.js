
import * as serviceWorker from './serviceWorker';
import store from "./Components/redux/store"
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";
import React from "react";

const rerenderApplication = () => {
    const Application = <BrowserRouter>
        <App store={store}
             addPost={store.addPost.bind(store)}
             updatePostText={store.updatePostText.bind(store)} />
    </BrowserRouter>;
    ReactDOM.render(Application, document.getElementById('root'));
};
rerenderApplication();
store.subscribe(rerenderApplication);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
