import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';




export class FormEditProduct extends React.Component {
    displayName = FormEditProduct.name
    constructor(props) {
        super(props);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        // this.handleNameChange=this.handleNameChange.bind(this);
        //this.handleNameChange=this.handleNameChange.bind(this);

        this.state = {
            id: this.props.id,
            name: this.props.name,
            Price: this.props.Price
        }
        // alert(`${this.props.name} ${this.state.Price} ${this.state.id}`)


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
    onEditSubmit(e) {
        e.preventDefault();
        const id = this.state.id
        const data = this.state;
        console.log(data);
        this.props.onEditSubmit(id, data);
        // alert(`${this.state.name} ${this.state.Price} ${id}`)

        this.setState({
            name: '',
            Price: ''
        })

    }


    render() {
        //console.log('formEdit')
        return (
            <div>
                <form name="add_data" className="form-horizontal"
                    onSubmit={this.onEditSubmit}>



                    <div id="add_data">
                        <div className="form-group">
                            <h3>Edit Product</h3>
                            <label className="col-sm-2 control-label required" htmlFor="add_data_Name">Name</label>
                            <div className="col-sm-10">
                                <input placeholder="Name"
                                    // ref={nameInput => this.nameInput = nameInput}
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