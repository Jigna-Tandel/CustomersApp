import React, { Component } from 'react';
import { FormProduct } from './FormProduct';


export class CreateProduct extends Component {
    displayName = CreateProduct.name

    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);



    }


    onAdd(data) {
        console.log(data);
        /* const items = this.state.items;
         items.push({ name, address });
         this.setState(items);*/

        return fetch('api/Products', {
            method: 'POST',
            //mode: 'CORS',
            // body: JSON.stringify({ Name: name, Address: address }),
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
           // alert("Success");
            
        }).catch(err => err);
        
    }

    render() {
        return (
            <div>
                <h2>Create Product</h2>
                <FormProduct onAdd={this.onAdd}/>
                



            </div>
        );
    }
}