import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default class UserInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalText: '',
            modalTitle:'',
            taskToAdd: '',
            todoList: this.props.todoList,
            showAlert: false,
        };
        this.addTask = this.addTask.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        // this.submitActivity = this.submitActivity.bind(this);
    }

    addTask() {
        // AVOID EMPTY STRINGS
        if (this.state.taskToAdd === "") {
            this.setState({modalTitle:"Empty Task"});
            this.setState({modalText:"Please enter a name for the task"});
            this.setState({showAlert:true});
            return;
        // CHECK FOR REPEATED ACTIVITIES
        } else if (this.props.todoList.indexOf(this.state.taskToAdd) > -1){
            this.setState({modalTitle:"Duplicate Task"})
            this.setState({modalText:`The Task "${this.state.taskToAdd}" already exists. Please enter a different task.`});
            this.setState({showAlert:true});
            return
        } else {
            this.props.addTask(this.state.taskToAdd);
            this.setState({ taskToAdd: "" });
        }
    }

    handleUpdate(event) {
        this.setState({ taskToAdd: event.target.value });
    }
    
    handleClose() {
        this.setState({showAlert:false})
    }

    render() {
        return (
            <div className="input">
                <Container>
                    <Row>
                        <Col lg="6">
                            <Form>
                                <Form.Group controlId="activity">
                                    {/* <Form.Label>Activity Name</Form.Label> */}
                                    <Form.Control
                                        type="text"
                                        value={this.state.taskToAdd}
                                        onChange={this.handleUpdate}
                                        placeholder="Enter an activity"
                                    />
                                    <Form.Text className="text-muted">
                                    Please use a concise name.
                                    </Form.Text>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <Button
                                variant="primary"
                                onClick={this.addTask}
                            >
                                Add Task
                            </Button>{' '}
                        </Col>
                    </Row>
                </Container>
                <Modal
                    show={this.state.showAlert}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.modalText}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                        Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}