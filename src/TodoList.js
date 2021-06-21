import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
// import ListItem from './ListItem';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        let task;
        // let todoList = this.props.todoList;
        // this.removeTask = this.removeTask.bind(this);
    }
    removeTask(event) {
        console.log("REACHING REMOVE TODOLIST")
        // console.log(this.state.todoList.indexOf(event.target.value))
        this.props.removeTask(2)
    }
    tasks = this.props.todoList.map((task) =>
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title 
                        key={task}
                    >
                        {task}
                    </Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    <Button
                        variant="danger"
                        onClick={this.removeTask()}
                    >
                        Delete
                    </Button>{' '}
                </Card.Body>
            </Card>
        </div>
    );

    render() {
        return (
            <div>
                <ul>
                    {this.tasks && this.tasks.length > 0 ? this.tasks : <li>No tasks defined. Please add one.</li>}
                </ul>
            </div>
        )
    }
}