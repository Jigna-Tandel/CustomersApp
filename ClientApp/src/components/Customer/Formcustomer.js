import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';




export class Formcustomer extends React.Component {
    displayName = Formcustomer.name
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            name: '',
            address: ''
        }


    }





    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleAddressChange = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const data = this.state;
        // console.log(data);
        this.props.onAdd(this.state);

        // alert(`${this.state.name} ${this.state.address}`)

        this.setState({
            name: '',
            address: ''
        })

    }


    render() {
        return (
            <div>
                <form name="add_data" className="form-horizontal"
                    onSubmit={this.onSubmit}>



                    <div id="add_data">
                        <div className="form-group">
                            <h3>Add Customer</h3>
                            <label className="col-sm-2 control-label required" htmlFor="add_data_Name">Name</label>
                            <div className="col-sm-10">
                                <input placeholder="Name"
                                    id="add_data_Name"
                                    required="required"
                                    value={this.state.name}
                                    onChange={this.handleNameChange}

                                />

                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="add_data_Address">Address</label>
                            <div className="col-sm-10">


                                <input placeholder="Address"
                                    // ref={addressInput => this.addressInput = addressInput}
                                    id="add_data_Adress"
                                    required="required"
                                    value={this.state.address}
                                    onChange={this.handleAddressChange}

                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10">
                                <button type="submit"
                                    id="add_data_submit"
                                    className="btn-default btn">



                                    Save
                                </button>

                            </div>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}