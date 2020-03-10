import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {addPost, updatePostText} from "./Components/redux/store";

const rerenderApplication = (store) => {
    const Application = <BrowserRouter>
        <App store={store} addPost={addPost} updatePostText={updatePostText}/>
    </BrowserRouter>;
    ReactDOM.render(Application, document.getElementById('root'));
};
export default rerenderApplication
