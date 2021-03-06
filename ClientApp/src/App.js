import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CustomerMain } from './components/Customer/CustomerMain';
import { StoreMain } from './components/Store/StoreMain';
import { CreateStore } from './components/Store/CreateStore'
import { ProductMain } from './components/Product/ProductMain';
import { CreateProduct } from './components/Product/CreateProduct';
import { Create } from './components/Customer/Create';
import { SalesMain } from './components/Sales/SalesMain';
import LoadCustomer from './components/Sales/LoadCustomer';
import { CreateSales } from './components/Sales/CreateSales';
import { FormEdit } from './components/Customer/FormEdit';




export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
       
           
          <Route path='/Customer/FormEdit' component={FormEdit} />
            <Route path='/Customer/Create' component={Create} />
            <Route path='/Customer/CustomerMain' component={CustomerMain} />
            <Route path='/Store/StoreMain' component={StoreMain} />
            <Route path='/Store/CreateStore' component={CreateStore} />
            <Route path='/Product/ProductMain' component={ProductMain} />
            <Route path='/Product/CreateProduct' component={CreateProduct} />
            <Route path='/Sales/SalesMain' component={SalesMain} />
            <Route path='/Sales/LoadCustomer' component={LoadCustomer} />
            <Route path='/Sales/CreateSales' component={CreateSales} />
            
            

           
           
            
      </Layout>
    );
  }
}
