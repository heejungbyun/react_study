import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './MyTodoList'

class Contents extends React.Component{
    render(){
        return(
            <div className="container">
                <TodoList/>
            </div>
        )
    }
}

export default Contents;
