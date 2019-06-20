﻿import React, { Component } from 'react';
import { FormStore } from './FormStore';


export class CreateStore extends Component {
    displayName = CreateStore.name

    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);



    }


    onAdd(data) {
        console.log(data);
        /* const items = this.state.items;
         items.push({ name, address });
         this.setState(items);*/

        return fetch('api/Stores', {
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
                <h2>Create Store</h2>
                <FormStore onAdd={this.onAdd}/>
                



            </div>
        );
    }
}