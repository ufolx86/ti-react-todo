import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'

export default class UserInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activityToAdd: '',
            showAlert: false,
            todoListOptions : ["Shower", "Breakfast", "Wash Teeth", "Check e-mail", "Code Project", "Customer Meeting", "Lunch"]
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.submitActivity = this.submitActivity.bind(this);
    }


    options = this.state.todoListOptions.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        )
    })

    handleUpdate(event) {
        this.setState({ value: event.target.value });
      }

    submitActivity () {
        // if (this.state.activityToAdd.length) {
        //     this.props.addTodo(this.state.value);
        //     this.setState({ value: "" });
        // }
        if (this.state.activityToAdd === "") {
            console.log("EMPTY")
            this.setState({showAlert:true})
            this.state.todoListOptions.push("EMPTY")
        } else {
            this.state.todoListOptions.push(this.state.activityToAdd)
            this.setState({ activityToAdd: "" });
        }
    }

    render() {
        return (
            <div className="input">
                <h3>Add New Activity</h3>
                <Form>
                    <Form.Group controlId="activity">
                        <Form.Label>Activity Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.activityToAdd}
                            onChange={this.handleUpdate}
                            placeholder="Enter an activity"
                        />
                        <Form.Text className="text-muted">
                        Please use a concise name.
                        </Form.Text>
                    </Form.Group>
                </Form>
               
                <Button
                    variant="primary"
                    onClick={this.submitActivity}
                >
                    Submit Activity
                </Button>{' '}

                {/* <Button variant="danger">Delete</Button>{' '} */}
                <Form>
                    <Form.Control 
                        as="select"
                    >
                        {this.options}
                    </Form.Control>
                </Form>
                <Alert 
                    variant="danger"
                    onClose={() => this.setState({showAlert:false})}
                    dismissible
                >
                    <Alert.Heading>Please check...</Alert.Heading>
                    <p>
                    Either you did not enter an activity or the activity is already defined.
                    </p>
                </Alert>
            </div>
        )
    }
}