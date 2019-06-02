import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>my_new_app</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/'} exact>
                            <NavItem>
                                <Glyphicon glyph='home' /> Home
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/counter'}>
                            <NavItem>
                                <Glyphicon glyph='education' /> Counter
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/fetchdata'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Fetch data
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/customer'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> customer
              </NavItem>
                        </LinkContainer>
                        

                        <LinkContainer to={'/MyComponent'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> MyComponent
              </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/list'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> list
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/Create'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Create
              </NavItem>
                        </LinkContainer>
                       
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
