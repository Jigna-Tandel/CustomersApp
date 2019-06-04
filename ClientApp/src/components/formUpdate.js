


import React, { Component } from 'react';

export class formUpdate extends Component {
    displayName = formUpdate.name

    constructor(props) {
        super(props);
    }

    getInitialState() {
        return {
            name: this.props.name || 'some body',
            address: this.props.address || 'some title'
        }
        console.log("name:" + this.state.name);
    }

    handlenameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleaddressChange(e) {
        this.setState({
            address: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }


    render() {
        return (
            <div>
                <form name="add_data" className="form-horizontal" onSubmit={this.onSubmit}>
                    <div id="add_data">
                        <div className="form-group">
                            <h1>Add Customer</h1>
                            <label className="col-sm-2 control-label required" htmlFor="add_data_Name">Name</label>
                            <div className="col-sm-10">
                                <input
                                    ref={nameInput => this.nameInput = nameInput}
                                    id="add_data_Name"
                                    required="required"
                                    defaultValue={this.state.name}
                                value={this.state.name}
                                    onChange={this.handlenameChange}
                                />

                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="add_data_Address">Address</label>
                            <div className="col-sm-10">


                                <input placeholder="Address"
                                    ref={addressInput => this.addressInput = addressInput}
                                    id="add_data_Adress"
                                    required="required"
                                    defaultValue={this.props.address}
                                 value={this.state.address}
                                    onChange={this.handleaddressChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10">
                                <button type="submit"
                                    id="add_data_submit"
                                    className="btn-default btn">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

