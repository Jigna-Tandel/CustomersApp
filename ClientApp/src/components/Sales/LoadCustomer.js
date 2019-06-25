import React, { Component } from 'react'
import { FormSales } from './FormSales';
import {BindData} from './BindData';

export class LoadCustomer extends Component {
    displayName = LoadCustomer.name
    constructor(props) {
        super(props)
    
        this.state = {
            error: null,
            isLoaded: false,
             customers:[],
             products:[],
             stores:[]
        }
    }
    
  /*  componentDidMount() {
        let custNames = [];
        fetch('api/Customers')
            .then(response => {
                return response.json();
            }).then(data => {custNames = data.results.map((custName) => {
                return custName
            });
            console.log(custNames);
            this.setState({
                customers: custNames,
            });
        });
    }*/
    componentDidMount(){
        this.fetchCustomer();
        this.fetchProduct();
        this.fetchStore();
    }

    fetchCustomer() {
        fetch('api/Customers')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        customers: result
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
    fetchProduct() {
        fetch('api/Products')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        products: result
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
    fetchStore() {
        fetch('api/stores')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        stores: result
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

    render() {
        console.log(this.state.customers)
        return (
            <div>
                <h3>Add Sales</h3>
                 <BindData 
                 customer={this.state.customers}
                 product={this.state.products}
                 store={this.state.stores}
                 onAdd={this.props.onAdd}
                 ></BindData> 
                {/* <FormSales customer={this.state.customers}></FormSales> */}
            </div>
        )
    }
}

export default LoadCustomer
