import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import axios from "axios"

export default class Login extends React.Component {
    state = {
        email: "", 
        password: "", 
    }
    _login = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8000/login", {params:{

            email: this.state.email, 
            password: this.state.password
        }
        }).then((response) => {
            console.log(response)
            if(response.status === 200){
                this.props.history.push('/study')
            }
            else{
                alert('your password wrong')
            }
        })
    }
    _updateState = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
        <Form>
            <FormGroup onChange={this._updateState}>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" value={this.state.email} placeholder="my-Email-is-the-Best@Some-old-domain.com" />
            </FormGroup>
            <FormGroup onChange={this._updateState}>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" value={this.state.password} id="examplePassword" placeholder="..." />
            </FormGroup>

            <Button onClick={this._login}>Submit</Button>
            <Link to="/register">Register</Link>
        </Form>
        );
    }
}

