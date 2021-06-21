// import './App.css';
import React, {Component} from 'react';
import UserInput from './UserInput'
import TodoList from './TodoList'

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        let todoList;
        this.state = {
            todoList : ["Shower", "Breakfast", "Wash Teeth", "Check e-mail", "Code Project", "Customer Meeting", "Lunch"]

        };
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.updateTaskList = this.updateTaskList.bind(this);
    }

    addTask (newTask) {
        this.setState((state) => {
            const todoList = state.todoList.push(newTask)
            console.log(state.todoList)
            return todoList
        });
    }
    removeTask(id) {
        console.log("REACHING REMOVE")
        this.setState((state) => {
            const todoList = state.todoList.filter((task) => task.id !== id);
            return {
                todoList: todoList
            }
        });
    }
    updateTaskList() {
        this.setState(
            function(state) {
                // const todoList = state.todoList.map(task) => {
                //     return (
                        
                //     )
                // }
            }
        )
    }
    render() {
        return (
            <div>
                <h1>Test Todo List Interview</h1>
                <UserInput 
                    addTask = {this.addTask}
                    todoList = {this.state.todoList}
                />
                <TodoList 
                    todoList = {this.state.todoList}
                    removeTask = {this.removeTask}
                    updateTaskList = {this.updateTaskList}
                />
            </div>

        );
    }
}

export default TodoApp;
