import React from 'react';
import ReacDOM from 'react-dom';
//var React = require('react');
//var ReactDOM = require('react-dom');

class Test extends React.Component{
  sayHello(){
      alert('안녕!');
  }
  render(){
    var name = 'SAHA';
    var age = 20;
    function a(){
      var a = '안녕하세요';
      var b = ' SAHA';
      return a + b;
    }
    return (
      <div>
        <div>{(name == 'SAHA' ? 'true' : 'false')}</div>
        <div>{a()}</div>
        <button onClick={this.sayHello}>Click me</button>
      </div>
    )
  }
}

export default Test