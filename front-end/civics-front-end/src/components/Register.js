import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import axios from "axios"
import {withRouter} from 'react-router-dom'

class Register extends React.Component {
    state = {
        email: "", 
        password: "", 
        confirmPassword: "", 
        first_name: "",
        last_name: ""
    }
    _register = (e) => {
        e.preventDefault();
        console.log("register clicked")

        if(this.state.password === this.state.confirmPassword){
            axios.post(
                'http://localhost:8000/register', {
                first_name: this.state.first_name, 
                last_name: this.state.last_name, 
                email: this.state.email,
                password: this.state.password, 
                }
            ).then(() => {
                this.props.history.push('/login')
            }).catch((error) => {
                console.log("front end", error)
            })
        }else{
            alert("Sorry, your password's don't match")
        }
    }
    _updateState = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (

        <Form>
            <h3>Registation page</h3>
            <FormGroup onChange={this._updateState}>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="Email" value={this.state.email}  />
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
                <Label for="first_name">First Name</Label>
                <Input type="text" name="first_name" value={this.state.first_name} id="first_name" placeholder="John" />
            </FormGroup>
            <FormGroup onChange={this._updateState}>
                <Label for="last_name">Last Name</Label>
                <Input type="text" name="last_name" value={this.state.last_name} id="last_name" placeholder="Smith" />
            </FormGroup>

            <Button onClick={this._register}>Register</Button>
            <Link to="/login">Login</Link>
        </Form>
        );
    }
}


export default withRouter(Register)
