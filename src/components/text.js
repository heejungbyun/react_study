import React from 'react';
import ReactDOM from 'react-dom';


class Test extends React.Component{

    sayHello(){
        alert('성공')

    }

    render(){
        var name = '전종명';
        var age = 20;
        function a (){
            var a = 1;
            var b = 2;
            return a+b;
        }
        return(
            <button onClick={this.sayHello}>click me</button>
        )
    }
}

export default Test;
