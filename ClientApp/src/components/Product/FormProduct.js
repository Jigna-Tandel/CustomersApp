import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';




export class FormProduct extends React.Component {
    displayName = FormProduct.name
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onclose=this.onclose.bind(this);


        this.state = {
            name: '',
            Price: ''
        }


    }


    onclose(){
        
        this.props.onclose();
    }


    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handlePriceChange = (event) => {
        this.setState({
            Price: event.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const data = this.state;
        // console.log(data);
        this.props.onAdd(this.state);

        // alert(`${this.state.name} ${this.state.Price}`)

        this.setState({
            name: '',
            Price: ''
        })

    }


    render() {
        return (
            <div>
                <form name="add_data" className="form-horizontal"
                    onSubmit={this.onSubmit}>



                    <div id="add_data">
                        <div className="form-group">
                            <h3>Add Product</h3>
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
                            <label className="col-sm-2 control-label required" htmlFor="add_data_Price">Price</label>
                            <div className="col-sm-10">


                                <input placeholder="Price"
                                    type="number" 
                                    // ref={PriceInput => this.PriceInput = PriceInput}
                                    id="add_data_Adress"
                                    required="required"
                                    value={this.state.Price}
                                    onChange={this.handlePriceChange}

                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-2">
                            <div className="col-sm-10">
                                <button type="submit"
                                    id="add_data_submit"
                                    className="btn-default btn">



                                    Save
                                </button>
                                <button type="button"
                                   onClick={this.onclose}
                                    className="btn-default btn">



                                    Close
                                </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}