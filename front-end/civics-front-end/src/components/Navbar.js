import React from 'react';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class Navbarz extends React.Component {
constructor(props) {
super(props);

this.toggle = this.toggle.bind(this);
this.state = {
    isOpen: false
};
}
toggle() {
this.setState({
    isOpen: !this.state.isOpen
});
}
render() {
    let user = this.props.user;
return (
    <div>
    <Navbar color="light" light expand="md">
        {console.log(user)}
        <NavbarBrand href="/">Civics Trainer</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
            
            {
                user.loggedIn === false ? 
                <>
                    <NavItem>
                        <NavLink>
                            
                        <Link to="/login">Login</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink >
                        <Link to="/register">Register</Link>
                        </NavLink>
                    </NavItem> 
                    </>
                    : 
                    <>
                    <NavItem>
                        <NavLink to="/mastery">Welcome back, {this.props.user.name} | Mastery {this.props.user.stats}% </NavLink>
                    </NavItem> 
                    </>
                    

            }
            <NavItem>
                <NavLink>
                    <Link to="/test">Test</Link>
                </NavLink>
            </NavItem>
        </Nav>
        </Collapse>
    </Navbar>
    </div>
);
}
}
