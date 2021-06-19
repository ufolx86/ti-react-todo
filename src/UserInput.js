import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default class UserInput extends Component {

    // constructor(props) {
    //     super(props)
    // }
    functiontodoListOptions = ["Shower", "Breakfast", "Wash Teeth", "Check e-mail", "Code Project", "Customer Meeting", "Lunch"];
    options = this.functiontodoListOptions.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        )
      })
    render() {
        return (
            <div className="input">
                <h3>Add New Activity</h3>
                <Form>
                    <Form.Group controlId="activity">
                        <Form.Label>Activity Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter an activity" />
                        <Form.Text className="text-muted">
                        Please use a concise name.
                        </Form.Text>
                    </Form.Group>
                </Form>
               
                <Button variant="primary">Add</Button>{' '}
                <Button variant="danger">Delete</Button>{' '}
                <Form>
                    <Form.Control 
                        as="select"
                    >
                        {this.options}
                    </Form.Control>
                </Form>
            </div>
        )
    }
}