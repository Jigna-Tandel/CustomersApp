import React, { Component } from 'react';
import { list } from './Containers/list';



export class MainApp extends Component {
    displayName = MainApp.name

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <list></list>
            </div>
        );
    }
}