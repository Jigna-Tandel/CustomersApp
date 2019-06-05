import React, { Component } from 'react';



export class Form extends React.Component {
    displayName = Form.name
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            address: ''
        }


    }





    onSubmit(e) {
        e.preventDefault();
        // this.props.onSubmit(this.state);

        // const data = new FormData(e.target.value);  
        // this.props.onAdd(data);

        // this.props.onAdd(this.nameInput.value, this.addressInput.value);
        this.state.name = this.nameInput.value
        this.state.address = this.addressInput.value;
        const data = this.state;
        console.log(data);
        this.props.onAdd(data);
        this.nameInput.value = "";
        this.addressInput.value = "";

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
                                <input placeholder="Name"
                                    ref={nameInput => this.nameInput = nameInput}
                                    id="add_data_Name"
                                    required="required"

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