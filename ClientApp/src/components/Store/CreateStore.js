﻿import React, { Component } from 'react';
//import { Form } from './Form';


import { StoreMain } from './StoreMain';
import { FormStore } from './FormStore';


    
export class CreateStore extends Component {
    displayName = CreateStore.name

    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);

        this.state = {
            isadd: true
        }
        // console.log('Constructor',this.state.isadd)
    }
    componentDidMount() {
        this.setState({ isadd: true })
        // console.log('ComponentdidMount',this.state.isadd )
    }


    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({ isadd: true });

        }
    }


    onAdd(data) {


        return fetch('api/Stores', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).then(response => {
            alert('Record save Successfully');
            this.setState({ isadd: false })
        })
            .catch(error => console.error('Error:', error));


    }

    render() {

       
       if (this.state.isadd) {
            return (<div>
              
                <FormStore onAdd={this.onAdd} isadd={this.state.isadd} />
            </div>
            )
        }
        else {
            return (

                <div>

                    <StoreMain></StoreMain>



                </div>)
        }


    }
}