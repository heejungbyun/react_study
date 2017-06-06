import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';
import Timer from './components/Timer';
import TodoApp from './components/TodoApp';

const rootElement = document.getElementById('root');
const element = (<div><HelloMessage/><Timer/><TodoApp/></div>);
ReactDOM.render(element, rootElement);


