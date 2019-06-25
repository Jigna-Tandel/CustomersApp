import React, { Component } from 'react';
//import { Form } from './Form';


import { SalesMain } from './SalesMain';
import { FormSales } from './FormSales';
import LoadCustomer from './LoadCustomer';


    
export class CreateSales extends Component {
    displayName = CreateSales.name

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
        
        console.log('Inside CreateSale :',data)
        return fetch('api/Sales', {
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

            console.log('Inside CreateSale :',data)
    }

    render() {


    //    <FormSales></FormSales>
       if (this.state.isadd) {
            return (<div>
                <LoadCustomer  onAdd={this.onAdd} isadd={this.state.isadd}></LoadCustomer>
              
                {/* <FormSales onAdd={this.onAdd} isadd={this.state.isadd} /> */}
            </div>
            )
        }
        else {
            return (

                <div>

                    <SalesMain></SalesMain>



                </div>)
        }


    }
}