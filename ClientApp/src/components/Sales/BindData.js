import React, { Component } from 'react'

export class BindData extends Component {
    displayName = BindData.name
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
             prodId:'',
             custId:'',
             storeId:'',
             date:date
        }
    }

 
    handleCustomerChange=(event)=>{
        this.setState({custId:event.target.value})
    }

    handleProductChange=(event)=>{
        this.setState({
            prodId:event.target.value
        })
    }

    handleStoreChange=(event)=>{
        this.setState({
            storeId:event.target.value
        })
    }
       
    onSubmit(e) {
        e.preventDefault();

       // const data = this.state;
         //console.log('data',data);
        this.props.onAdd(this.state);
        console.log('insideBindData',this.state)
         alert(`${this.state.prodId} ${this.state.custId} ${this.state.storeId}`)

        this.setState({
            prodId:'',
             custId:'',
             storeId:''
        })

    }

    render() {
        console.log('BindData',this.props.customer)
        let customers = this.props.customer;
        let optionCustomer = customers.map((customer) =>
                <option key={customer.id} 
                value={customer.id} >
            {customer.name}</option>
            );

            let products = this.props.product;
        let optionProduct = products.map((product) =>
                <option key={product.id} value={product.id}>{product.name}</option>
            );

            let stores = this.props.store;
        let optionStore = stores.map((store) =>
                <option key={store.id} value={store.id}>{store.name}</option>
            );
        return (
            <div className="form-group">
            <form name="add_data" className="form-horizontal"
            onSubmit={this.onSubmit}>

            <div  className="form-group">
                <div  className="col-sm-10">
                    <label className="col-sm-2">DateSold  
                      
                    </label>
                    <div className="col-sm-10">
                    <input type="text" value={this.state.date}></input>
                    </div>
                </div>
                
            
        <div className="form-group">
        <div  className="col-sm-10">
            <label className="col-sm-2">Product   </label>
            
            <div className="col-sm-10">
            <select value={this.state.prodId}
                    onChange={this.handleProductChange}
                    defaultValue="Product" className="col-sm-2">
                         
               {optionProduct}
            </select>
            </div>
         </div>
        </div>
        <div className="form-group">
        <div  className="col-sm-10">
            <label className="col-sm-2">Customer  </label>
            <div className="col-sm-10">
            <select value={this.state.custId} 
                    onChange={this.handleCustomerChange}
                    required="required" placeholder='Customer'
                    className="col-sm-10">
               {optionCustomer}
            </select>
            </div>
            </div>
        </div>
        <div className="form-group">
        <div  className="col-sm-10">
            <label className="col-sm-2">Store   </label>
            <div className="col-sm-10">
            <select value={this.state.storeId}
                    onChange={this.handleStoreChange}
                    className="col-sm-2">
               {optionStore}
            </select>
            </div>
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
        )
    }
}

//</div>export default BindData
