
import * as serviceWorker from './serviceWorker';
import store from "./Components/redux/redux-store"
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const rerenderApplication = () => {
    const Application = <BrowserRouter>
        <App store={store}
             dispatch={store.dispatch.bind(store)}
        />
    </BrowserRouter>;
    ReactDOM.render(Application, document.getElementById('root'));
};
rerenderApplication();
store.subscribe(rerenderApplication);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
