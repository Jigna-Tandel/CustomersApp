import React, { Component } from 'react';
//import { Form } from './Form';


import { SalesMain } from './SalesMain';
import LoadCustomer from './LoadCustomer';
import { GetDataSales } from './GetDataSales';


    
export class CreateSales extends Component {
    displayName = CreateSales.name

    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this)
        this.onclose=this.onclose.bind(this)

        this.state = {
            isadd: true,
            isclose:false
        }
        // console.log('Constructor',this.state.isadd)
    }
    componentDidMount() {
        this.setState({ isadd: true })
        
        // console.log('ComponentdidMount',this.state.isadd )
    }
    

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({ isadd: true,isclose:false });

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

    onclose(){
        this.setState({
            isclose:true
        })

    }

    render() {

        if(this.state.isclose){
            return (

                <div>

                <SalesMain></SalesMain>




                </div>)
        }
    
       else if (this.state.isadd ) {
            return (<div>
                <LoadCustomer  
                onAdd={this.onAdd} 
                isadd={this.state.isadd}
                onclose={this.onclose}></LoadCustomer>
                            
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