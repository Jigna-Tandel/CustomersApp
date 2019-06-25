import React from 'react'

export class SalesTable extends React.Component {
    displayName = SalesTable.name


    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            address: '',
            isedit: false
        }
        var isedit = false;
        var id;


       // this.onEdit = this.onEdit.bind(this);
        //this.onEditSubmit = this.onEditSubmit.bind(this);

    }
    render()
    {
    return (
        <div>
            

<h2>Sales Detail</h2>


<table className='table'>
    <thead>
        <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Store</th>
            <th>Date</th>
            <th>Action</th>
            <th>Action</th>
            

        </tr>
    </thead>
    <tbody>
        {this.props.items.map(item =>
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.cust.name}</td>

                <td>{item.prod.name}</td>
                <td>{item.store.name}</td>
                <td>{item.datesold}</td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>

            </tr>
        )}
    </tbody>
</table>
</div>

            
        
    )
        }
}

