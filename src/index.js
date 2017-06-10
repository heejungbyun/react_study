//default import
import React from 'react';
import ReactDOM from 'react-dom';
// Simple component import
import Simple from './components/Simple';
// Time component import
import Time from './components/Stateful';
// TodoApp component import
import TodoApp from './components/Application'
// withoutJSX
import HelloWorld from './components/withoutJSX'
const rootElement = document.getElementById('root');
const Element = (
	<div>
		<Simple name="종명"/>
		<Time />
		<TodoApp />
		<HelloWorld />
	</div>
);
function test(){
	console.log('test')
}
// render함수 인자로 3가지 https://facebook.github.io/react/docs/react-dom.html

ReactDOM.render(Element, rootElement, test);

/* ReactDom 최상위객체 */
console.dir(ReactDOM)
