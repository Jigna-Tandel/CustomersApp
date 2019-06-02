
import React, { Component } from 'react';
import { GetData } from './GetData';
//import { Create } from './Create';
//{
//    "items": [
//        { "id": 1, "name": "Apples", "price": "$2" },
//        { "id": 2, "name": "Peaches", "price": "$5" }
//    ]
//}
export class MyComponent extends React.Component {
    displayName = MyComponent.name
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        //this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        fetch('api/Customers')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }




    handleDelete = id => {
        console.log("EventHandler called", id);
        console.log('id:' + id);

         fetch('api/Customers/' + id, { method: 'Delete' })
            .then((result) => {
                let items = this.state.items.filter((item) => {
                    return id !== item.id;
                });

                this.setState(state => {
                    state.items = items;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });




    }


    /* handleDelete = id => {
         console.log("EventHandler called", id);
         const items = this.state.items.filter(c => c.id !== id);
        // this.setState({ items: items });
        // this.setState(items);
 
         this.setState(state => {
             state.items = items;
             return state;
         });
     };*/

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                   

                    <GetData items={this.state.items}
                        // onDelete={this.onDelete.bind(this)}
                        onDelete={this.handleDelete}
                    />

                </div>
            );
            //<div>
            //<h1>Customer Detail</h1>
            //<p>This component demonstrates fetching data from the server.</p>

            //<table className='table'>
            //    <thead>
            //        <tr>
            //            <th>ID</th>
            //            <th>Name</th>
            //            <th>Address</th>
            //            <th>Edit</th>
            //            <th>Delete</th>

            //        </tr>
            //    </thead>
            //    <tbody>
            //        {items.map(item =>
            //            <tr key={item.id}>
            //                <td>{item.id}</td>
            //                <td>{item.name}</td>

            //                <td>{item.address}</td>
            //                <td>
            //                    <button>
            //                        Edit
            //                </button>
            //                </td>
            //                <td>
            //                    <button onClick={(id) => this.handleDelete(item.id)}>
            //                        Delete
            //                </button>
            //                </td>

            //            </tr>
            //        )}
            //    </tbody>
            //    </table>
            //    </div>
            // );
        }
    }
}


