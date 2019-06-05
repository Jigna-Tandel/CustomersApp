import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import { MyComponent } from './components/MyComponent';
import { Create } from './components/Create';
import { CustomerMain } from './components/Customer/CustomerMain';


CustomerMain


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetchdata' component={FetchData} />
            
            <Route path='/MyComponent' component={MyComponent} />
            <Route path='/Create' component={Create} />
            <Route path='/Customer/CustomerMain' component={CustomerMain} />
          
           
            
      </Layout>
    );
  }
}
