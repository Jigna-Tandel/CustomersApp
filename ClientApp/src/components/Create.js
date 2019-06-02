import React, { Component } from 'react';
import { Form } from './Form';

export  class Create extends Component {
    displayName = Create.name

    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);
        
    }
    

    onAdd(name,address) {
        console.log(name,address);
       /* const items = this.state.items;
        items.push({ name, address });
        this.setState(items);*/

        return fetch('api/Customers', {
            method: 'POST',
            //mode: 'CORS',
            body: JSON.stringify({Name: name, Address: address}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => err);
    }

    render() {
        return (
            <div>
                <Form onAdd={this.onAdd} />



            </div>
        );
    }
}