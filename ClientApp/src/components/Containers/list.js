import React, { Component } from 'react';
import { fetchPost } from '../../components/actions/PostActions';
import { Table1 } from '../comp/Table1';


export class list extends Component {
    displayName = list.name

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.handleDelete = this.handleDelete.bind(this);
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



   
    handleDelete(id)
{
    console.log('Click happened');
    console.log('id:'+id);
        return fetch('api/Customers/Delete/' + id, { method: 'delete'})
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



        console.log('Click happened');
        console.log(id);
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
                            {items.map(item =>
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
                                        <button onClick={(id)=>this.handleDelete(item.id)}>
                                            Delete
                                </button>
                                    </td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
   

}


/*export  class list extends Component {
    displayName = list.name

    constructor(props) {
        super(props);

        this.state = {
            blogPosts: []
        };
    };

    componentDidMount() {
        fetchPost()
            .then((data) => {
                this.setState(state => {
                    state.blogPosts = data;
                    return state;
                })
            })
            .catch((err) => {
                console.error('err', err);
            });
    };

    render() {
        return (
            <div>
                
                <Table1 items={this.state.items} />
            </div>
        );
    }

   
}*/