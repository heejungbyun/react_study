import React from 'react';
import ReactDOM from 'react-dom';
// var createReactClass = require('create-react-class');
// createReactClass사용하려면 createReactClass모듈이 필요함
// npm install --save-dev create-react-class

class Simple extends React.Component{
	render(){
		return <div style={{color:'pink',fontWeight:'bold',fontSize:'30px'}}>Hello {this.props.name}</div>
	}
}


console.dir(React.Component)
// es6를 사용하지 않고 create-react-class사용시
// var App = createReactClass({
// 	render: function(){
// 		return <h1>Hello,{this.props.name}</h1>;
// 	}
// })

export default Simple;
