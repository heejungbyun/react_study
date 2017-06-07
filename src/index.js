//default import
import React from 'react';
import ReactDOM from 'react-dom';
// Simple component import
import Simple from './components/Simple';
// Time component import
import Time from './components/Stateful';
// TodoApp component import
import TodoApp from './components/Application'
const rootElement = document.getElementById('root');
const Element = (
	<div>
		<Simple name="종명"/>
		<Time />
		<TodoApp />
	</div>
);
ReactDOM.render(Element, rootElement);
