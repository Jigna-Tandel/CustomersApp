import React, { Component } from 'react';
import { Form } from './Form';
import { updateForm } from './updateForm';

export class Create extends Component {
    displayName = Create.name

    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);

        

    }
   

    onAdd(data) {
        console.log(data);
        /* const items = this.state.items;
         items.push({ name, address });
         this.setState(items);*/

        return fetch('api/Customers', {
            method: 'POST',
            //mode: 'CORS',
            // body: JSON.stringify({ Name: name, Address: address }),
            body: JSON.stringify(data),
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
                <Form onAdd={this.onAdd}
                     />

               

            </div>
                );
            }
}