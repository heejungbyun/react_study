import React from 'react';
var elStyle = {
    color:'crimson',
    fontSize:'20px'
}
class HelloMessage extends React.Component {
  render() {
    return (
        <div style={elStyle}>{this.props.name}</div>
    );
  }
}

export default HelloMessage;
