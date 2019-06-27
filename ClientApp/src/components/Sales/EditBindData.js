import React, { Component } from 'react'

export class EditBindData extends Component {
    displayName = EditBindData.name
    constructor(props) {
        super(props)
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.onclose=this.onclose.bind(this);
        this.state = {
             id:this.props.id,
            // id:this.props.salesitem.id,
            datesold:this.props.salesitem.datesold,
             prodId:this.props.salesitem.prodid,
              custId:this.props.salesitem.custid,
              storeId:this.props.salesitem.storeid
            // prodname:this.props.prodname
        }
        console.log('state:salesItem',this.state)
        console.log('props:salesItem',this.props.salesitem)
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
      
    onclose(){
        this.props.onclose()
       // alert("Close Click")
    }
  
    onEditSubmit(e) {
        e.preventDefault();
        const id = this.state.id
        const data = this.state;
        console.log(data);
        if(this.state.prodId &&this.state.custId&&this.state.storeId)
        {
        this.props.onEditSubmit(id, data);
        console.log('insideBindData',this.state)
         alert(`${this.state.prodId} ${this.state.custId} ${this.state.storeId}`)
        }
        else
        {
            alert('Enter Value')
        }

        this.setState({
            id:'',
            prodId:'',
             custId:'',
             storeId:''
        })

    }

    render() {
      //  console.log('state',this.state.prodname)
        //console.log('props',this.props.prodname)
        console.log('BindData:salesItem',this.props.salesitem)
        let customers = this.props.customer;
        let optionCustomer = customers.map((customer) =>
                <option key={customer.id} 
                value={customer.id}
                >{customer.name}</option>
            );

            let products = this.props.product;
        let optionProduct = products.map((product) =>
                <option key={product.id} value={product.id}
                >{product.name}</option>
            );

            let stores = this.props.store;
        let optionStore = stores.map((store) =>
                <option key={store.id} value={store.id}>{store.name}</option>
            );
        return (
            <div>
            <form name="add_data" className="form-horizontal"
            onSubmit={this.onEditSubmit}>

            <div>
                <div>
                    <label>DateSold:</label>
                    <label>
                                      {this.props.salesitem.datesold}
                    </label>
                </div>
            
        <div>
            <label>Product : </label>
            <select value={this.state.prodId}
                    onChange={this.handleProductChange} 
                >
               {optionProduct}
            </select>
        </div>
        <div>
            <label>Customer : </label>
            <select value={this.state.custId} 
                    onChange={this.handleCustomerChange}
                    required="required">
               {optionCustomer}
            </select>
        </div>
        <div>
            <label>Store : </label>
            <select value={this.state.storeId}
                    onChange={this.handleStoreChange}>
               {optionStore}
            </select>
        </div>
      
        <div className="form-group">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10" >
                                <button type="submit"
                                    id="add_data_submit"
                                    className="btn-default btn">



                                    Save
                                </button>
                                
                                <div className="col-sm-2" ></div>
                                <button onClick= {this.onclose}>
                                                                    Close
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
