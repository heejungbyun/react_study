import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/simple';
import Timer from './components/stateful';
import TodoApp from './components/application';
const contElement = (
  <div>
      <HelloMessage name="A Single Component" />
      <Timer />
      <TodoApp />
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(contElement, rootElement);
