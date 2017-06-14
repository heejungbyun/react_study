//default import
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Contents from './components/Contents';
import Footer from './components/Footer';

const Element = (
    <div className="wrap">
        <Header/>
        <Contents />
        <Footer />
    </div>
)
var rootElement = document.getElementById('root');
ReactDOM.render(Element, rootElement);
