
import React, { Component } from 'react';
export class GetData extends React.Component {
    displayName = GetData.name

    constructor(props) {
        super(props)
       // this.deleteHandler=this.deleteHandler.bind(this)
    }

   /* deleteHandler(id) {
       // e.preventDefault();
        const { onDelete, Id } = this.props;
        console.log("Delete called")
        console.log("Id"+id)
       // this.props.onDelete(this.props.items.id);

    };*/

   /* onDeleteMe(id) {
        const { onDelete, Id } = this.props;
        //onDelete(Id);

        console.log("DeleteMe called")
        console.log(this.props.items.id)


    }*/

    render() {
        return (
            <div>
                <h1>Customer Detail</h1>
                <p>This component demonstrates fetching data from the server.</p>

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
                        {this.props.items.map(item =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>

                                <td>{item.address}</td>
                                <td>
                                    <button>
                                        Edit
                                </button>
                                </td>
                                <td>
                               
                                    <button onClick={()=>this.props.onDelete(item.id)}>
                                        DeleteMe
                                </button>
                                </td>
i
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        )
    }
}