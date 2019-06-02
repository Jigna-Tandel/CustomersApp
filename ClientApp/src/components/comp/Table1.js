// /src/components/comp/Table.js

import React, { Component } from 'react';

export  class Table1 extends Component {
    displayName = Table1.name

    constructor(props) {
        super(props);
    };



    render() {
        return (
            <div>
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

                        {this.props.blogPosts && this.props.blogPosts.map(post => { 
                            return (
                           // {this.props.map(post => {
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.name}</td>

                                    <td>{post.name}</td>
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
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}