import React, { Component } from 'react'
import './addtodostyle.css'


class TodoAddComponent extends Component{

    constructor(){
        super()
        this.state = {
            taskName:'',
            todoList:[] 
        }
    }

    getTaskText = (event)=>{
        this.setState({
            taskName:event.target.value
        })
    }

    addTodoList = (e,todo)=>{
        e.preventDefault();
        if(todo!==''){
            var todolist = this.state.todoList;
        todolist.push({
            text: todo,
            isDone : false
        });
        this.setState({
           todoList: todolist,
           taskName:""
        })
        }
        
      
    }

    deleteTodo = (index)=>{
        var todoList = this.state.todoList.filter((element,i)=>{
            if(i!==index) return element
            return null;
        })
        this.setState({
            todoList:todoList
        })
    }

    updateTodoText = (index,todoText)=>{
        var todoList = this.state.todoList.map((e,i)=>{
            if(i===index) return {
                text: todoText,
                isDone: e.isDone
            }
            return e;
        })
        this.setState({todoList:todoList})
    }

    changeStatus(index){
        var todoList = this.state.todoList.map((e,i)=>{
            if(i===index) return {
                text: e.text,
                isDone: !e.isDone
            }
            return e;
        })
        this.setState({todoList:todoList})
    }

    render(){
        return (
        
                <div>
                <div>
                    <label>Enter Your task:</label>
                    <input disabled='false' className="todoInput" type='text' value={this.state.taskName} onChange={this.getTaskText}></input>
                    <button className="addTodo" onClick={(e) => this.addTodoList(e, this.state.taskName)}>Add Task</button>
                </div>
                <div className="todoListDiv">
                    {
                        this.state.todoList.map((todo,index) =>
                            <div className="todoItem" key={index}>
                                <input className="chBox" type="checkbox" onChange={() => this.changeStatus(index)} />
                                <input type="text" className={todo.isDone ? "todoText strikeOff" : "todoText"} value={todo.text} onChange={e => this.updateTodoText(index,e.target.value)}/>
                                <button className="deleteButton" onClick={()=>this.deleteTodo(index)}>delete</button>
                            </div>
                        )
                    }
                </div>
                </div>
        )
    }
}
export default TodoAddComponent