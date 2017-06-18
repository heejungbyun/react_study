import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Contents from './components/Contents';
import Footer from './components/Footer';
require('./scss/style.scss')

// import HelloMessage from './components/HelloMessage';
// import Timer from './components/Timer';
// import TodoApp from './components/TodoApp';
// import Test from './components/text';
//
// const rootElement = document.getElementById('root');
// const element = (
//     <div>
//         <HelloMessage/>
//         <Timer/>
//         <TodoApp/>
//         <Test/>
//     </div>
// );


 var rootElement = document.getElementById('root')


const element = (
    <div className="wrap">
        <Header/>
        <Contents/>
        <Footer/>
    </div>

)

ReactDOM.render(element, rootElement);
