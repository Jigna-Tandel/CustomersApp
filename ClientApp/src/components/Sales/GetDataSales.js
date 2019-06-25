
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FormEditSales } from './FormEditSales';
import {CreateSales} from'./CreateSales'
import { SalesMain } from './SalesMain';
import LoadCustomer from './LoadCustomer';
import { LoadEditData } from './LoadEditData';




export class GetDataSales extends React.Component {
    displayName = GetDataSales.name


    constructor(props) {
        super(props)
        this.state = {
            id: '',
            datesold:'',
            prodid:'',
            prodname:'',
            custid:'',
            custname:'',
            storeid:'',
            storename:'',
            isedit: false
        }
        var isedit = false;
        var id;


        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);

    }


    onEdit(id,datesold,prodid,prodname,custid,custname,storeid,storename) {
        this.setState({
            id: id,
            datesold:datesold,
            prodid:prodid,
            prodname:prodname,
            custid:custid,
            custname:custname,
            storeid:storeid,
            storename:storename,
            isedit: true
        })
        // this.isedit = true
        this.id = id;
        console.log('Id:',this.state.id)

        console.log(this.state)
        console.log('Id:',id)

        console.log(custname)


    }


    componentDidMount() {
        this.setState({ isedit: false })

    }


    onEditSubmit(id, data) {
        this.props.onEdit(id, data);
        this.setState({ isedit: false })

    }

    render() {
        console.log('Id:',this.state.id)

        console.log(this.state.name)
        //console.log('GetData')
        //console.log('props',this.props.isedit)
        //const { name, address } = this.props.items;
        //console.log("name:" + this.state.name, "address:" + this.state.address);
        if (this.props.isedit) {
            return (
                <div>
                    <SalesMain></SalesMain>
                </div>
            )
        }
        else {
            return (
                <div>
                    {
                        this.state.isedit
                            ? (
                                <LoadEditData
                                id={this.state.id}
                               /* prodname={this.state.prodname}
                                custname={this.state.custname}
                                storename={this.state.storename}*/
                                salesitem={this.state}
                               // address={this.state.address}
                                onEditSubmit={this.onEditSubmit}></LoadEditData>

                                // <FormEditSales
                                //     id={this.state.id}
                                //     prodname={this.state.prodname}
                                //     custname={this.state.custname}
                                //     storename={this.state.storename}
                                //    // address={this.state.address}
                                //     onEditSubmit={this.onEditSubmit}></FormEditSales>

                            )
                            : (
                                <div>


                                    <div>
                                        <div>
                                            <Link to="./CreateSales"><h3>Add Sales</h3></Link>
                                            {/* <Link to="./LoadCustomer"><h3>Add Sales</h3></Link> */}
                                           
                                        </div>
                                        <div>

                                            <h2>Sales Detail</h2>


                                            <table className='table'>
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                       
                                                        <th>Product</th>
                                                        <th>Customer</th>
                                                        <th>Store</th>
                                                        <th>Date</th>
                                                        <th>Action</th>
                                                        <th>Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.props.items.map(item =>
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.prod.name}</td>
                                                            <td>{item.cust.name}</td>
                                                            <td>{item.store.name}</td>
                                                            <td>
                                                          
         
                                                            {item.datesold}</td>
                                                            <td>
                                                                <button onClick={() => 
                                                                    this.onEdit(item.id,
                                                                                item.datesold,
                                                                                item .prod.id,    
                                                                                item.prod.name,
                                                                                item.cust.id, 
                                                                                item.cust.name,
                                                                                item.store.id,
                                                                                item.store.name)}>
                                                                    Edit
                                        </button>



                                                            </td>
                                                            <td>

                                                                <button onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.props.onDelete(item.id) }}>
                                                                    Delete
                                        </button>


                                                            </td>

                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            )
                    }
                </div>
            )
        }
    }
}