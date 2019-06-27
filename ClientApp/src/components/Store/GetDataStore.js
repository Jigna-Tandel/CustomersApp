
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FormEditStore } from './FormEditStore';
import {CreateStore} from'./CreateStore'
import { StoreMain } from './StoreMain';

//



export class GetDataStore extends React.Component {
    displayName = GetDataStore.name


    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            address: '',
            isedit: false,
            isclose:false
        }
        var isedit = false;
        var id;

        this.onclose=this.onclose.bind(this)
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);

    }
    onclose(){
        this.setState({isclose:true,isedit:false})

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
        if ((this.props.isedit)||(this.state.isclose)) {
            return (
                <div>
                    <StoreMain></StoreMain>
                </div>
            )
        }
        else {
            return (
                <div>
                    {
                        this.state.isedit
                            ? (


                                <FormEditStore
                                    id={this.state.id}
                                    name={this.state.name}
                                    address={this.state.address}
                                    onEditSubmit={this.onEditSubmit}
                                    onclose={this.onclose}></FormEditStore>

                            )
                            : (
                                <div>


                                    <div>
                                        <div>
                                            <Link to="./CreateStore"><h3>Add Store</h3></Link>
                                           
                                        </div>
                                        <div>

                                            <h2>Store Detail</h2>


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