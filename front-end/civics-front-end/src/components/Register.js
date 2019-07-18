import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class Register extends React.Component {
    state = {
        email: "", 
        password: "", 
        confirmPassword: "", 
        firstName: "", 
        greenCardRecievedDate: "", 
        zipCode: "", 
        datePaperWorkSubmitted: "", 
        whereSubmitted: ""
    }
    _register = (e) => {
        e.preventDefault();
        if(this.state.password === this.state.confirmPassword){
            alert("You've been registerd")
        }else{
            alert("Sorry, your password's don't match")
        }
    }
    _updateState = (e) => {
        console.log(e.target.name)
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (

        <Form>
            <h3>Registation page</h3>
            <FormGroup onChange={this._updateState}>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="Email" value={this.state.email} placeholder="my-Email-is-the-Best@Some-old-domain.com" />
            </FormGroup>
            <FormGroup onChange={this._updateState}>
                <Label for="Password">Password</Label>
                <Input type="password" name="password" value={this.state.password} id="Password" placeholder="..." />
            </FormGroup>
            <FormGroup onChange={this._updateState}>
                <Label for="confirmPassword">Password</Label>
                <Input type="password" name="confirmPassword" value={this.state.confirmPassword} id="confirmPassword" placeholder="...better match" />
            </FormGroup>
            <FormGroup onChange={this._updateState}>
                <Label for="firstName">First Name</Label>
                <Input type="text" name="firstName" value={this.state.firstName} id="firstName" placeholder="John" />
            </FormGroup>
            <FormGroup onChange={this._updateState}>
                <Label for="greenCardRecievedDate">Green Card Recieved Date</Label>
                <Input type="date" name="greenCardRecievedDate" value={this.state.greenCardRecievedDate} id="greenCardRecievedDate" />
            </FormGroup>
            <FormGroup onChange={this._updateState}>
                <Label for="datePaperWorkSubmitted">Date paperwork Submitted</Label>
                <Input type="date" name="datePaperWorkSubmitted" value={this.state.datePaperWorkSubmitted} id="datePaperWorkSubmitted" />
            </FormGroup>
            <FormGroup onChange={this._updateState}>
                <Label for="whereSubmitted">Where did you send your paperwork</Label>
                <Input type="text" name="whereSubmitted" value={this.state.whereSubmitted} id="whereSubmitted" placeholder="Phoenix"/>
            </FormGroup>
            <FormGroup onChange={this._updateState}>
                <Label for="zipCode">Zipcode</Label>
                <Input type="text" name="zipCode" value={this.state.zipCode} id="zipCode" placeholder="90210" />
            </FormGroup>

            <Button onClick={this._register}>Register</Button>
            <Link to="/login">Login</Link>
        </Form>
        );
    }
}

