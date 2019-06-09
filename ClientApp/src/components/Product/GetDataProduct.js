
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { CreateProduct } from './CreateProduct';


CreateProduct


export class GetDataProduct extends React.Component {
    displayName = GetDataProduct.name


    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            price: ''
        }
        var isedit = false;
        var id;


        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);

    }

    onEdit(id, name, price) {
        this.setState({
            id: id,
            name: name,
            price: price
        })
        this.isedit = true
        this.id = id;



    }

    onEditSubmit(event) {
        event.preventDefault();
        this.state.name = this.nameInput.value
        this.state.price = this.priceInput.value;
        const id = this.id;
        const data = this.state;
        console.log(id);
        console.log(data);

        this.props.onEdit(id, data);
        this.nameInput.value = "";
        this.priceInput.value = "";
        this.isedit = false;
        // console.log(data)
    }



    render() {
        //const { name, price } = this.props.items;
        console.log("name:" + this.state.name, "price:" + this.state.price);
        return (
            <div>
                {
                    this.isedit
                        ? (

                            <div>
                                <form name="Edit_data" className="form-horizontal" onSubmit={this.onEditSubmit}>
                                    <div id="add_data">
                                        <div className="form-group">
                                            <h2>Edit Product</h2>
                                            <label className="col-sm-2 control-label required" htmlFor="add_data_Name">Name</label>
                                            <div className="col-sm-10">
                                                <input placeholder="Name"
                                                    required="required"
                                                    ref={nameInput => this.nameInput = nameInput}
                                                    defaultValue={this.state.name} />



                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label required" htmlFor="add_data_price">price</label>
                                            <div className="col-sm-10">


                                                <input placeholder="price"
                                                    required="required"
                                                    type="number"
                                                    ref={priceInput => this.priceInput = priceInput}
                                                    defaultValue={this.state.price} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-2"></div>
                                            <div className="col-sm-10">
                                                <button
                                                    className="btn-default btn">
                                                    Save
                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>


                        )
                        : (
                            <div>
                                <div>
                                    <Link to="./CreateProduct"><h2>Add Product</h2></Link>
                                </div>
                                <div>

                                    <h1>Product Detail</h1>
                                    <p>This component demonstrates fetching data from the server.</p>

                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>price</th>
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

                                                        <button onClick={() => this.props.onDelete(item.id)}>
                                                            Delete
                                </button>
                                                    </td>

                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        )
                }
            </div>

        )
    }
}