import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'

export default class UserInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskToAdd: '',
            showAlert: false,
        };
        this.addTask = this.addTask.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        // this.submitActivity = this.submitActivity.bind(this);
    }

    addTask() {
        // AVOID EMPTY STRINGS
        if (this.state.taskToAdd === "") {
            // this.setState({showAlert:true});
            return;
        // CHECK FOR REPEATED ACTIVITIES
        } else if (this.props.todoList.indexOf(this.state.taskToAdd) > -1){
            // this.setState({showAlert:true});
            console.log("Activity already exists.")
            return
        } else {
            this.props.addTask(this.state.taskToAdd);
            this.setState({ taskToAdd: "" });
        }
    }

    handleUpdate(event) {
        this.setState({ taskToAdd: event.target.value });
    }

    render() {
        return (
            <div className="input">
                <b-container fluid lg="6">
                    <Form>
                        <Form.Group controlId="activity">
                            <Form.Label>Activity Name</Form.Label>
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
                </b-container>
               
                <Button
                    variant="primary"
                    onClick={this.addTask}
                >
                    Add Task
                </Button>{' '}

                {/* <Button variant="danger">Delete</Button>{' '} */}
                {/* <Form>
                    <Form.Control 
                        as="select"
                    >
                        {this.options}
                    </Form.Control>
                </Form> */}
                {/* <Alert 
                    variant="danger"
                    onClose={() => this.setState({showAlert:false})}
                    dismissible
                >
                    <Alert.Heading>Please check...</Alert.Heading>
                    <p>
                    Either you did not enter an activity or the activity is already defined.
                    </p>
                </Alert> */}
            </div>
        )
    }
}