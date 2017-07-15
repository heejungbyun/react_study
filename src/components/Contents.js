import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './MyTodoList';

class Contents extends React.Component{
    render(){
        return(
            <div className="container">
                <Todolist/>
            </div>
        )
    }
}

export default Contents;
