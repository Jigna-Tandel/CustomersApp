
import React, { Component } from 'react';
import { GetData } from './GetData';
import { Link } from 'react-router-dom'
import { update } from './update';




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
       // this.onEditSubmit = this.onEditSubmit.bind(this);
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

    handleEdit =id => {
       // this.props.history.push("/update/" + id);
       // console.log(data);



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
    onEdit(id, data) {
        console.log(id);
        console.log(data);
        return fetch('api/Customers/' + id, {
            method: 'PUT',
            // mode: 'CORS',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => err);
       // console.log("name:" + data);
       // console.log("Address:" + address);

    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Link to="/Create">Add Customer</Link>

                    <GetData items={this.state.items}
                        // onDelete={this.onDelete.bind(this)}
                        onDelete={this.handleDelete}
                       // onEditSubmit={this.onEditSubmit}
                        onEdit={this.onEdit}
                       // onEdit={<link to="/update"/>}
                    />

                </div>
            );

        }
    }
}