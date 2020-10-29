import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let  posts = [
    {id: 1, message: 'Hi! how are you?', likesCount: 12},
    {id: 2, message: 'Hi! It is my first post', likesCount: 15},
    {id: 3, message: 'Maybe we can to play with us', likesCount: 15},
];

let  messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Thanks. How are your dill my Friend?'},
    {id: 4, message: 'Thanks everything is ok and you?'},
    {id: 4, message: 'YOUUu'},
];

let  dialogs = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Svitlana'},
    {id: 4, name: 'Victor'},
    {id: 5, name: 'Vera'},
    {id: 6, name: 'Sasha'},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
