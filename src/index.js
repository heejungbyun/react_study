import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Contents from './components/contents';
import Footer from './components/footer';

const Element = (
  <div>
    <Header />
    <Contents />
    <Footer />
  </div>
)
var rootElement = document.getElementById('root');
ReactDOM.render(Element, rootElement);