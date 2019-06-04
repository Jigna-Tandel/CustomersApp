/// <reference path="counter.js" />
import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRedirect } from 'react-router'
import { Form } from './Form';
import { updateForm } from './updateForm';
import { formUpdate } from './formUpdate';



export class update extends Component {
    displayName = update.name

    constructor(props) {
        super(props);
        // this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
        //

        // this.onAdd = this.onAdd.bind(this);

    }

    componentDidMount() {
        var id = this.props.match.params["id"];
        console.log("Id :" + id);
        this.fetchData(id);
        console.log("name :" + this.state.items.name);

    }

    fetchData(id) {
        console.log("Id :" + id);
        fetch('api/Customers/' + id)
            
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        console.log("name :" + this.state.items.name);
    }

    updateData(id, data) {
        return fetch('api/Customers/' + id, {
            method: 'PUT',
            // mode: 'CORS',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => err);
    }

    //onSubmit(e) {
    //    e.preventDefault();
    //    // this.props.onSubmit(this.state);

    //    // const data = new FormData(e.target.value);  
    //    // this.props.onAdd(data);

    //    // this.props.onAdd(this.nameInput.value, this.addressInput.value);
    //    // this.state.items.name = this.nameInput.value
    //    //this.state.items.address = this.addressInput.value;
    //    const data = [{ name: this.nameInput.value }, { address: this.addressInput.value }]
    //    //this.items.setState({

    //    //        name: this.nameInput.value,
    //    //        address: this.addressInput.value

    //    //});
    //    // const data = this.state.items;
    //    console.log(data);
    //    console.log(data);
    //    this.updateData(this.state.id, data);
    //    // this.props.onAdd(data);
    //    this.nameInput.value = "";
    //    this.addressInput.value = "";

    //}

    handleSubmit(data) {
        console.log('form submission data', data);
        this.updateData(this.state.items.id, data);
    }

    //onAdd(data) {
    //    console.log(data);
    //    this.updateData(this.state.id, data);
    //}

   


    render() {
        const { error, isLoaded, items } = this.state;
        return (
            <div>
                <formUpdate onSubmit={this.handleSubmit}
                    name={this.state.items.name}
                    address={this.state.items.address}
                    id={this.state.items.id}/>
                
            </div>
        );
    }


    //render() {
    //    const { error, isLoaded, items } = this.state;
    //    console.log("Id :" + this.state.items.id);
    //    console.log("name :" + this.state.items.name);
    //    console.log("address :" + this.state.items.address);

    //    return (
           

    //        <div>
    //            <form name="add_data" className="form-horizontal" onSubmit={this.onSubmit}>
    //                <div id="add_data">
    //                    <div className="form-group">
    //                        <h1>Add Customer</h1>
    //                        <label className="col-sm-2 control-label required" htmlFor="add_data_Name">Name</label>
    //                        <div className="col-sm-10">
    //                            <input
    //                                placeholder={this.state.items.name}
    //                                ref={nameInput => this.nameInput = nameInput}
    //                                //id="add_data_Name"
    //                                // required="required"
    //                                defaultValue={this.state.items.name}
    //                               // value={this.state.items.name}

    //                            //value={this.state.title}
    //                            // onChange={this.handleTitleChange}
    //                            />
                                
    //                            <div className="form-group">


    //                            </div>
    //                        </div>
    //                        <label className="col-sm-2 control-label required" htmlFor="add_data_Address">Address</label>
    //                        <div className="col-sm-10">


    //                            <input placeholder={this.state.items.address}
    //                                ref={addressInput => this.addressInput = addressInput}
    //                                id="add_data_Adress"
    //                                required="required"
    //                               // value={this.state.items.address}
    //                                defaultValue={this.state.items.address}
    //                            // value={this.state.body}
    //                            // onChange={this.handleBodyChange}
    //                            />
    //                        </div>
    //                    </div>
    //                    <div className="form-group">
    //                        <div className="col-sm-2"></div>
    //                        <div className="col-sm-10">
    //                            <button type="submit"
    //                                id="add_data_submit"
    //                                className="btn-default btn">
    //                                Submit
    //                            </button>
    //                        </div>
    //                    </div>
    //                </div>
    //            </form>
    //        </div>
    //    );
    //}
}