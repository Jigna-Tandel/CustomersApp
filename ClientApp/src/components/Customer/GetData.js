
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FormEdit } from './FormEdit';
import { CustomerMain } from './CustomerMain';

//



export class GetData extends React.Component {
    displayName = GetData.name


    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            address: '',
            isedit: false
        }
        var isedit = false;
        var id;


        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);

    }


    onEdit(id, name, address) {
        this.setState({
            id: id,
            name: name,
            address: address,
            isedit: true

        })
        // this.isedit = true
        this.id = id;


    }


    componentDidMount() {
        this.setState({ isedit: false })

    }


    onEditSubmit(id, data) {
        this.props.onEdit(id, data);
        this.setState({ isedit: false })

    }

    render() {
        //console.log('GetData')
        //console.log('props',this.props.isedit)
        //const { name, address } = this.props.items;
        //console.log("name:" + this.state.name, "address:" + this.state.address);
        if (this.props.isedit) {
            return (
                <div>
                    <CustomerMain></CustomerMain>
                </div>
            )
        }
        else {
            return (
                <div>
                    {
                        this.state.isedit
                            ? (


                                <FormEdit
                                    id={this.state.id}
                                    name={this.state.name}
                                    address={this.state.address}
                                    onEditSubmit={this.onEditSubmit}></FormEdit>

                            )
                            : (
                                <div>


                                    <div>
                                        <div>
                                            <Link to="./Create"><h3>Add Customer</h3></Link>
                                        </div>
                                        <div>

                                            <h2>Customer Detail</h2>


                                            <table className='table'>
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Address</th>
                                                        <th>Edit</th>
                                                        <th>Delete</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.props.items.map(item =>
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>

                                                            <td>{item.address}</td>
                                                            <td>
                                                                <button onClick={() => this.onEdit(item.id, item.name, item.address)}>
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