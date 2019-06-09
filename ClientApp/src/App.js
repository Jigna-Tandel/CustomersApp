import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';


import { Create } from './components/Create';
import { CustomerMain } from './components/Customer/CustomerMain';
import { StoreMain } from './components/Store/StoreMain';
import { CreateStore } from './components/Store/CreateStore'
import { ProductMain } from './components/Product/ProductMain';
import { CreateProduct } from './components/Product/CreateProduct';








export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
       
           
            
            <Route path='/Create' component={Create} />
            <Route path='/Customer/CustomerMain' component={CustomerMain} />
            <Route path='/Store/StoreMain' component={StoreMain} />
            <Route path='/Store/CreateStore' component={CreateStore} />
            <Route path='/Product/ProductMain' component={ProductMain} />
            <Route path='/Product/CreateProduct' component={CreateProduct} />

           
           
            
      </Layout>
    );
  }
}
