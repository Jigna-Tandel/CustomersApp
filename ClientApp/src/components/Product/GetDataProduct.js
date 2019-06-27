
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FormEditProduct } from './FormEditProduct';
import { CreateProduct } from './CreateProduct'
import { ProductMain } from './ProductMain';

//



export class GetDataProduct extends React.Component {
    displayName = GetDataProduct.name


    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            Price: '',
            isedit: false,
            isclose:false
        }
        var isedit = false;
        var id;


        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.onclose=this.onclose.bind(this)

    }

    onclose(){
        this.setState({isclose:true,isedit:false})
    }


    onEdit(id, name, Price) {
        this.setState({
            id: id,
            name: name,
            Price: Price,
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
        //const { name, Price } = this.props.items;
        //console.log("name:" + this.state.name, "Price:" + this.state.Price);
        if ((this.props.isedit)||(this.state.isclose)) {
            return (
                <div>
                    <ProductMain></ProductMain>
                </div>
            )
        }
        else {
            return (
                <div>
                    {
                        this.state.isedit
                            ? (


                                <FormEditProduct
                                    id={this.state.id}
                                    name={this.state.name}
                                    Price={this.state.Price}
                                    onEditSubmit={this.onEditSubmit}
                                    onclose={this.onclose}></FormEditProduct>

                            )
                            : (
                                <div>


                                    <div>
                                        <div>
                                            <Link to="./CreateProduct"><h3>Add Product</h3></Link>

                                        </div>
                                        <div>

                                            <h2>Product Detail</h2>


                                            <table className='table'>
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Price</th>
                                                        <th>Edit</th>
                                                        <th>Delete</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.props.items.map(item =>
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>

                                                            <td>{item.price}</td>
                                                            <td>
                                                                <button onClick={() => this.onEdit(item.id, item.name, item.price)}>
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