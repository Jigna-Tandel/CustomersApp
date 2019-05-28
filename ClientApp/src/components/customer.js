import React, { Component } from 'react';

export class customer extends Component {
    displayName = customer.name

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };

        fetch('api/Customers')
            .then(response => response.json())
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.id}>
                            <td>{forecast.id}</td>
                            <td>{forecast.name}</td>
                           
                            <td>{forecast.address}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : customer.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <h1>Customer Detail</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}
