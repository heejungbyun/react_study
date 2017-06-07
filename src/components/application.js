import React from 'react';
var inpStyle = {
    height:'28px',
    padding:'3px',
    border:'1px solid #cdcdcd',
    borderRight:'none',
    verticalAlign:'top',
    boxSizing:'border-box'
}
var btnStyle = {
    height:'28px',
    padding:'3px',
    border:'1px solid #cdcdcd',
    background:'#a2f4ee'
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text} style={inpStyle} />
          <button type="submit" style={btnStyle}>{'추가' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoApp;
