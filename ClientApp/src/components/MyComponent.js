
import React, { Component } from 'react';
import { GetData } from './GetData';
import { Link } from 'react-router-dom'
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';



export class MyComponent extends React.Component {
    displayName = MyComponent.name
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            isedit: false,
            items: []
        };

    }



    componentDidMount() {

        this.fetchData();

    }
    componentDidUpdate(prevProps) {

        if (this.props !== prevProps) {
            this.fetchData();
            this.setState({ isedit: true })

           // console.log('componentDidUpdate in MyComponent', this.state)

        }
    }


    fetchData() {
        fetch('api/Customers')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    handleDelete = id => {
        console.log("EventHandler called", id);
        console.log('id:' + id);

        fetch('api/Customers/' + id, { method: 'Delete' })
            .then((result) => {
                let items = this.state.items.filter((item) => {
                    return id !== item.id;
                });

                this.setState(state => {
                    state.items = items;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });




    }


    onEdit = (id, data) => {
        console.log('MyComponent', id);
        console.log('MyComponent', data);
        return fetch('api/Customers/' + id, {
            method: 'PUT',
            // mode: 'CORS',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {

            return res;

        }).then(response => {
            alert('Record Edit Successfully');
            this.setState({ isedit: true })
            //alert(`inside Mycomponent ${this.state.isedit}`)
        })
            //  }).then(response => this.setState({isadd:false}))
            // }).then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));

    }

    render() {

        const { error, isLoaded, items, isedit } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <div>


                    <GetData items={this.state.items}
                        isedit={this.state.isedit}
                        onDelete={this.handleDelete}
                        onEdit={this.onEdit}

                    />


                </div>
            );

        }
    }
}