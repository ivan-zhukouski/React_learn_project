import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import store from "./Components/redux/store"

let postsData = [
    {post:'Hi, How are you?? Are kidding me??', likeCount: 24},
    {post:'Have you read my message??', likeCount: 27},
];
let dialogsData = [
    {name: 'Ivan', id: 1,},
    {name: 'Dimon', id: 2,},
];
let messageData = [
    {message:'Yo, bro!!', id: 1},
    {message:'How are you??', id: 2}
];
const Application = <BrowserRouter>
                        <App store={store}/>
                    </BrowserRouter>;
ReactDOM.render(Application, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
