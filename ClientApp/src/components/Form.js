import React, { Component } from 'react';


export class Form extends React.Component {
    displayName = Form.name

    state = {
        name: '',
        address: ''
    }

    //constructor(props) {
    //    super(props)
    //    // this.deleteHandler=this.deleteHandler.bind(this)
    //    this.onSubmit = this.onSubmit.bind(this);
    //}
    //onSubmit(event) {
    //    event.preventDefault();
    //    this.props.onAdd(this.nameInput.value, this.addressInput.value);
    //}

/*
    getInitialState() {
        return {
            body: this.props.body || 'some body',
            title: this.props.title || 'some title'
        }
    }


    handleBodyChange(e) {
        this.setState({
            body: e.target.value
        });
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }*/
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        
    }
    onSubmit(e) {
        e.preventDefault();
       // this.props.onSubmit(this.state);

       // const data = new FormData(e.target.value);  
       // this.props.onAdd(data);

        this.props.onAdd(this.nameInput.value, this.addressInput.value);
       
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
                                    //value={this.state.title}
                                // onChange={this.handleTitleChange}
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
                                   // value={this.state.body}
                                // onChange={this.handleBodyChange}
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