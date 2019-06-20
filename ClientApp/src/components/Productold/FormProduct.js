import React, { Component } from 'react';



export class FormProduct extends React.Component {
    displayName = FormProduct.name
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            price: ''
        }


    }





    onSubmit(e) {
        e.preventDefault();
        // this.props.onSubmit(this.state);

        // const data = new FormData(e.target.value);  
        // this.props.onAdd(data);

        // this.props.onAdd(this.nameInput.value, this.priceInput.value);
        this.state.name = this.nameInput.value
        this.state.price = this.priceInput.value;
        const data = this.state;
        console.log(data);
        this.props.onAdd(data);
        this.nameInput.value = "";
        this.priceInput.value = "";

    }

//     CheckDecimal() {
//    var decimal = /^[-+]?[0-9]+\.[0-9]+$/;
//    if (this.priceInput.value.match(decimal)) {
//        alert('Correct, try another...')
//        return true;
//    }
//    else {
//        alert('Wrong...!')
//        return false;
//    }
//} 

  
    render() {
        return (
            <div>
                <form name="add_data" className="form-horizontal" onSubmit={this.onSubmit} >
                    <div id="add_data">
                        <div className="form-group">
                            <h2>Add Product</h2>
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
                            <label className="col-sm-2 control-label required" htmlFor="add_data_price">price(Number)</label>
                            <div className="col-sm-10">
                                <input placeholder="Price" name="price"
                                    ref={priceInput => this.priceInput = priceInput}
                                    id="add_data_Price"
                                    required="required"
                                    type="number" 
                                                                     
                                     />

                                
                                  
                            </div>
                           
                           </div>
                           
                        </div>
                        <div className="form-group">
                            <div className="col-sm-2">
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