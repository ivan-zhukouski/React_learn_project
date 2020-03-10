import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import store from "./Components/redux/store"
import {addPost} from "./Components/redux/store";

addPost("yuuuuuuuu"); //test

const Application = <BrowserRouter>
                        <App store={store} addPost={addPost}/>
                    </BrowserRouter>;
ReactDOM.render(Application, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
