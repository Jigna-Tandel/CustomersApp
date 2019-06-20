
import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { GetDataProduct } from './GetDataProduct';


      

export class ProductMain extends React.Component {
    displayName = ProductMain.name
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        //this.onDelete = this.onDelete.bind(this);
        // this.onEditSubmit = this.onEditSubmit.bind(this);
    }



    componentDidMount() {

        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props !== prevProps) {
            this.fetchData();
        }
    }

    fetchData() {
        fetch('api/Products')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
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

        fetch('api/Products/' + id, { method: 'Delete' })
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


    onEdit(id, data) {
        console.log(id);
        console.log(data);
        return fetch('api/Products/' + id, {
            method: 'PUT',
            // mode: 'CORS',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => err);

        // this.fetchData();
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>

                   
                    <GetDataProduct items={this.state.items}
                        onDelete={this.handleDelete}
                        onEdit={this.onEdit}

                    />

                </div>
            );

        }
    }
}