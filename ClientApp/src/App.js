import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { customer } from './components/customer';
import { MyComponent } from './components/MyComponent';
import { Create } from './components/Create';


import { MainApp } from './components/MainApp'; 
import { Table1} from './components/comp/Table1';
import { list } from './components/Containers/list';
//import { PostActions } from './components/actions/PostActions';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetchdata' component={FetchData} />
            <Route path='/customer' component={customer} />
            <Route path='/MyComponent' component={MyComponent} />
            <Route path='/Create' component={Create} />

            <Route path='/MainApp' component={MainApp} />
            <Route path='/Table1' component={Table1} />
            <Route path='/list' component={list} />
           
            
      </Layout>
    );
  }
}
