import React from 'react';
import ReactDOM from 'react-dom';

// List 컴포넌트
class TodoList extends React.Component{
    render(){
        return(
            <div>
                <TodoNote/>
                <TodoForm/>
            </div>

        )
    }
}

// 실질적인 List 컴포넌트
class TodoNote extends React.Component{
    render(){
        return(
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
        )
    }
}

//입력 컴포넌트
class TodoForm extends React.Component{
    render(){
        return(
            <div className="form_todo">
                <input type="text"/>
                <button>입력</button>
            </div>
        )
    }
}

export default TodoList;
