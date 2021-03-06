﻿import React, { Component } from 'react';
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
                        <Link to={'/'}>My New App</Link>
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

                        


                       

                        <LinkContainer to={'/Customer/CustomerMain'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Customer
              </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/Store/StoreMain'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Store
              </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/Product/ProductMain'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Product
              </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/Sales/SalesMain'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Sales
              </NavItem>
                        </LinkContainer>


                        


                       



                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
