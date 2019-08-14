import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import axios from "axios"
import {withRouter} from 'react-router-dom'

class AddAQuestion extends React.Component {
    state = {
        question: "", 
        answer: "",
        // category: ""
    }
    _onSubmit = (e) => {
        e.preventDefault();
        console.log("submit Q was clicked")

        if(this.state.question !== "" && this.state.answer !== ""){
            axios.post(
                'http://localhost:8000/createq', {
                question: this.state.question,
                answer: this.state.answer
                // Category additions can be added here
                // category: this.state.category
                }
            ).then(() => {
                this.props.history.push('/study')
            }).catch((error) => {
                console.log("front end", error)
            })
        }else{
            alert("Sorry, all fields are required")
        }
    }
    
    _updateState = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (

        <Form onSubmit={this._onSubmit}>
            <h3>Add a question</h3>
            {/* Should this be a drop down for category ?  */}
            {/* <FormGroup onChange={this._updateState}>
                <Label for="category">Category</Label>
                <Input type="text" name="category" id="Category" value={this.state.catagory}  />
            </FormGroup> */}
            <FormGroup onChange={this._updateState}>
                <Label for="question">Question</Label>
                <Input type="text" name="question" value={this.state.question} id="question" placeholder="What is the question?" />
            </FormGroup>
            <FormGroup onChange={this._updateState}>
                <Label for="answer">Answer</Label>
                <Input type="text" name="answer" value={this.state.answer} id="answer" placeholder="I'll take answer for 500" />
            </FormGroup>
            <Button onClick={this._onSubmit}>Submit</Button>
        </Form>
        );
    }
}



export default withRouter(AddAQuestion)
