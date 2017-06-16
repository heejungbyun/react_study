import React from 'react';
import ReactDOM from 'react-dom';

// List 컴포넌트
class TodoList extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {items:[],text:''};
	}

	handleChange(e){
		this.setState({text:e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		var newItem = {
			text: this.state.text,
			id:Date.now()
		};
		this.setState((prevState) => ({
			items: prevState.items.concat(newItem),
			text: ''
		}))

	}
    render(){
        return(
            <div>
				<ul>
				  {this.state.items.map(item => (
					<li key={item.id}>{item.text}</li>
				  ))}
				</ul>
				<div className="form_todo">
					<form onSubmit={this.handleSubmit}>
		                <input type="text" onChange={this.handleChange} value={this.state.text}/>
		                <button>{'입력' + (this.state.items.length +1)}</button>
					</form>
	            </div>
            </div>

        )
    }
}

export default TodoList;
