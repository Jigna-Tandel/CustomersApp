import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';




export class FormSales extends React.Component {
    displayName = FormSales.name
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            name: '',
            customer:[]
        }


    }
    componentDidMount() {
        let custNames = [];
        fetch('api/Customers')
            .then(response => {
                return response.json();
            }).then(data => {
            custNames = data.results.map((custName) => {
                return custName
            });
            console.log(custNames);
            this.setState({
                customer: custNames,
            });
        });
    }




    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
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

        // let customers = this.state.customer;
        // let optionItems = customers.map((customer) =>
        //         <option key={customer.id}>{customer.name}</option>
        //     );
        return (
            <div>
                <form name="add_data" className="form-horizontal"
                    onSubmit={this.onSubmit}>



                    <div id="add_data">
                        <div className="form-group">
                            <h3>Add Sales</h3>
                            <label className="col-sm-2 control-label required" htmlFor="add_data_Name">Name</label>
                            <div className="col-sm-10">
                                <input placeholder="id"
                                    id="add_data_Name"
                                    required="required"
                                    value={this.state.id}
                                   // onChange={this.handleNameChange}

                                />

                            </div>
                            <label>CustomerName : </label>
                            <div>
             {/* <select>
                {optionItems}
             </select> */}
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