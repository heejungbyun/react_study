import React from 'react';
import ReactDOM from 'react-dom';

//localstorage -> 2.5mb ~ 5mb 저장가능 html5 에서 지원, localstorage
// List 컴포넌트
class TodoList extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {items:[],text:'',date:''};
	}

	handleChange(e){
		this.setState({text:e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		//날짜
		function getCurrentDate(){
			var dateObj = new Date();
			var year = dateObj.getFullYear();
			var month = dateObj.getMonth()+1;
			var day = dateObj.getDate();

			return year+'/'+month+'/'+day;
		}
		var newItem = {
			text: this.state.text,
			id:Date.now(),
			date: getCurrentDate()
		};
		this.setState((prevState) => ({
			items: prevState.items.concat(newItem),
			text: '',
			date: '',
		}))

	}
    render(){
        return(
            <div>
				<ul>
				  {this.state.items.map(item => (
					<li key={item.id} className="list_item">
					<label htmlFor="chk">했음</label>
					<input type="checkbox" id="chk"/>
						{item.text}
					<div className="other_info">
						<span className="date">{item.date}</span>
						<button className="btn_modify">수정</button>
						<button className="btn_del">삭제</button>
					</div>
					</li>
				  ))}
				</ul>
				<div className="form_todo">
					<form onSubmit={this.handleSubmit}>
		                <input type="text" onChange={this.handleChange} value={this.state.text}/>
		                <button>입력</button>
					</form>
	            </div>
            </div>

        )
    }
}

export default TodoList;
