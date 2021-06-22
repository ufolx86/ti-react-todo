import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: this.props.todoList
        };
        this.removeTask = this.removeTask.bind(this);
    }
    removeTask(task) {
        let id = this.props.todoList.indexOf(task);
        this.props.removeTask(id);
    }
    tasks = this.props.todoList.map((task) =>
        <div>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col lg="12">
                        <Card style={{ width: '45rem' }}>
                            <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col lg="6">
                                    <h4 key={task}>{task}</h4>
                                </Col>
                                <Col lg="2">
                                    <Button
                                        variant="danger"
                                        onClick={() => this.removeTask(task)}
                                    >
                                        Delete
                                    </Button>{' '}
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
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