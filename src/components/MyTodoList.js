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

	}
	handleSubmit(e){

	}
    render(){
        return(
            <div>
				<ul className="list_todo">
					<li>
						<label>라벨</label>
						<input type="checkbox"/>
						<strong>내용</strong>
						<span className="date">날짜</span>
						<button className="btn_modify">수정</button>
						<button className="btn_del">삭제</button>
					</li>
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
