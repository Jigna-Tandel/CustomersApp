
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { update } from './update';



export class GetData extends React.Component {
    displayName = GetData.name
   

    constructor(props) {
        super(props)
        this.state = {
            id:'',
             name:'',
            address:''
        }
        var isedit = false;
        var id;

        //console.log("name:state" + this.state.name);
        //console.log("address:state" + this.state.address);
        //console.log("name:props" + this.props.items.name);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        // this.deleteHandler=this.deleteHandler.bind(this)
    }

    onEdit(id,name,address) {
        this.setState({ id:id,
                       name: name ,
            address: address
        })
        this.isedit = true
        this.id = id;
        

       // console.log(id,this.state.name,address);
    }

    onEditSubmit(event) {
        event.preventDefault();
        this.state.name = this.nameInput.value
        this.state.address = this.addressInput.value;
        const id = this.id;
        const data = this.state;
        console.log(id);
        console.log(data);

        this.props.onEdit(id,data);
        this.nameInput.value = "";
        this.addressInput.value = "";
        this.isedit = false;
       // console.log(data)
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
        const { name, address } = this.props.items;
        console.log("name:"+this.state.name,"address:"+ this.state.address);
        return (
            <div>
                {
                    this.isedit
                    //this.state.isEdit
                        ? (
                            
                               

                            <form onSubmit={this.onEditSubmit} >
                               
                                    <div>
                                    <input placeholder="Name"
                                        ref={nameInput => this.nameInput = nameInput}
                                        defaultValue={this.state.name}
                                        />
                                        <input placeholder="Address"
                                            ref={addressInput => this.addressInput = addressInput}
                                            defaultValue={this.state.address}
                                        />
                                        
                                    </div>
                                    
                            
                                <button>Save</button>
                                </form>
            )
                : (
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
                                        <button onClick={this.onEdit}> Edit </button>
                                        <button onClick={() => this.onEdit(item.id,item.name,item.address)}>
                                            EditMe
                                </button>

                                        <span>
                                            <Link to={{
                                                pathname: '/update/' + item.id,
                                                id: item.id,
                                                state: {
                                                    fromNotifications: true
                                                }
                                            }}>Edit</Link>
                                        </span>
                                    </td>
                                    <td>

                                        <button onClick={() => this.props.onDelete(item.id)}>
                                            DeleteMe
                                </button>
                                    </td>
                                    \
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                )
}
            </div>

        )
    }
}