import React from 'react';
import ReactDOM from 'react-dom';
// var createReactClass = require('create-react-class');
// createReactClass사용하려면 createReactClass모듈이 필요함
// npm install --save-dev create-react-class

class Time extends React.Component {

 /* 생성자 메소드로서 컴포넌트가 처음 만들어질 때 실행 이 메소드에서 기본 state를 정할수 있음 */
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

 /* 컴포넌트가 만들어지고 첫 렌더링을 다 마친후 실행되는 메소드 이 안에서 타 프레임웍 연동, ajax, setinterval , settimeout */
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

/* 컴포넌트가 DOM 위에 만들어지기 전에 실행된다 */
  componentWillUnmount() {
    clearInterval(this.interval);
  }

/* 컴포넌트 렌더링 */
  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

export default Time;

/* 생성 consturctor -> componentWillMount -> render -> componentDidMount */

/* 삭제 componentWillUnmount */

/* 실습 : https://velopert.com/1130 */
