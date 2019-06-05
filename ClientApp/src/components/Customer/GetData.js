
import React, { Component } from 'react';
import { Link } from 'react-router-dom'





export class GetData extends React.Component {
    displayName = GetData.name


    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            address: ''
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
            address: address
        })
        this.isedit = true
        this.id = id;



    }

    onEditSubmit(event) {
        event.preventDefault();
        this.state.name = this.nameInput.value
        this.state.address = this.addressInput.value;
        const id = this.id;
        const data = this.state;
        console.log(id);
        console.log(data);

        this.props.onEdit(id, data);
        this.nameInput.value = "";
        this.addressInput.value = "";
        this.isedit = false;
        // console.log(data)
    }



    render() {
        //const { name, address } = this.props.items;
        console.log("name:" + this.state.name, "address:" + this.state.address);
        return (
            <div>
                {
                    this.isedit
                        ? (

                            <div>
                                <form name="Edit_data" className="form-horizontal" onSubmit={this.onEditSubmit}>
                                    <div id="add_data">
                                        <div className="form-group">
                                            <h2>Edit Customer</h2>
                                            <label className="col-sm-2 control-label required" htmlFor="add_data_Name">Name</label>
                                            <div className="col-sm-10">
                                                <input placeholder="Name"
                                                    required="required"
                                                    ref={nameInput => this.nameInput = nameInput}
                                                    defaultValue={this.state.name} />



                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label required" htmlFor="add_data_Address">Address</label>
                                            <div className="col-sm-10">


                                                <input placeholder="Address"
                                                    required="required"
                                                    ref={addressInput => this.addressInput = addressInput}
                                                    defaultValue={this.state.address} />
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
                                    <Link to="/Create"><h2>Add Customer</h2></Link>
                                </div>
                                <div>

                                    <h1>Customer Detail</h1>
                                    <p>This component demonstrates fetching data from the server.</p>

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