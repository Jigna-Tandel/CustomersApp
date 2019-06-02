import React, { Component } from 'react';


export class customer extends Component {
    displayName = customer.name

    constructor(props) {
        super(props);
        this.state = { customers: [], loading: true };

        fetch('api/Customers')
            .then(response => response.json())
            .then(data => {
                this.setState({ customers: data, loading: false });
            });
    }

    static rendercustomersTable(customers) {
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
                    {customers.map(customer =>
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>

                            <td>{customer.address}</td>
                            <td>
                                <button>
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button>
                                    Delete
                                </button>
                            </td>

                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : customer.rendercustomersTable(this.state.customers);

        return (
            <div>
                <h1>Customer Detail</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}
