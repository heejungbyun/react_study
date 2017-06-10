import React from 'react';
import ReactDOM from 'react-dom';

// function HelloWorld(){
// 	return(
// 		<h1>Hello World!</h1>
// 	);
// }
//

// function HelloWorld(){
// 	return React.createElement(
// 		"h1",
// 		null,
// 		"Hello World!"
// 	);
// }

// return ()로 안싸도 됨
// class App extends React.Component{
// 	render(){
// 		return <h1>zzz</h1>
// 	}
// }
var style = {
	color :'orange',
	backgroundColor :'black'
}

function test(){
	return 'HJ';
}

/* if문은 반드시 삼항연산자를 사용한다.*/

/* 앱이라는 클래스는 React.Component를 상속 받는다, 모든 컴포넌트를 만들때ㅔ는 React.Component 클래스를 상속해서 만든다. */
/* console.dir(app) */

console.log(React.Component)
class App extends React.Component{

	sayHello(){
		alert('리액트');
	}

	render(){
		let name = 'HJ';
		var age = 20;
		function calculator(){
			var a = 10;
			var b = 2;
			return a+b;
		}
		return(
			<div>
				<div>{this.props.example}</div>
				<div style={style}>{name}</div>
				<div>{age}</div>
				<div>{calculator()}{test()}</div>
				{console.dir(this)}
				<button onClick={this.sayHello}>click me</button>
				<div>{name == 'HJ' ? '맞아' : '틀려'}</div>
			</div>
		)
	}
}
// version up 되면서 사라짐
// var AppES5 = React.createClass({
// 	render:function(){
// 		return(
// 			<div>Hello Worldzzzz</div>
// 		)
// 	}
// })

App.defaultProps={
	example : '기본값'
}


export default App;
