import React from 'react';

class HelloMessage extends React.Component{
	render(){
		return <div style={{color:'red',fontSize:'20px',background:'pink',marginBottom:'20px'}}>1차 과제 {this.props.name}</div>;
	}

}
export default HelloMessage;
