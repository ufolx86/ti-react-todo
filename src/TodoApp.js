// import './App.css';
import React, {useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import UserInput from './UserInput'
import TodoList from './TodoList'

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        let localTodoList = [];
        this.state = {
            todoList : ["Shower", "Breakfast", "Wash Teeth", "Check e-mail", "Code Project", "Customer Meeting", "Lunch"]

        };
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        // this.updateTaskList = this.updateTaskList.bind(this);
    }
    addTask(newTask) {

        this.setState(
            (state) => {
                const localTodoList = state.todoList.concat(newTask);
                console.log(localTodoList)
                return {
                    todoList:localTodoList
                };
            }
        )
        // useEffect(() => {

        // });
        console.log(this.state.todoList)
    }

    removeTask(id) {
        // console.log(id)
        // this.setState({ todoList: this.state.todoList.filter((task) => task !== this.state.todoList[id]) }, () => {
        //     console.table(this.state.todoList);
        // });

        this.setState(
            (state) => {
              const localTodoList = state.todoList.filter((task) => task !== this.state.todoList[id]);
              console.table(localTodoList)
              return {
                todoList: localTodoList
              };
            },
        );
        // this.setState(
        //     (state) => {
        //         todoList: state.todoList.filter(function(task) { 
        //             return task !== this.state.todoList[id]
        //         })
        //     }
        // );
        // this.setState(
        //     (state) => {
        //         if (id>=0) {
        //             const localTodoList = state.todoList.splice(id,1)
        //             console.table(localTodoList)
        //             return {todoList: localTodoList}
        //         }
        //     }
        // )
    }
    render() {
        return (
            <div>
                <Container>
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
                </Container>
            </div>

        );
    }
}

export default TodoApp;
