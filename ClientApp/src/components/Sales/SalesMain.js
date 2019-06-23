import React, { Component } from 'react'
//import { SalesTable } from './SalesTable';



export class SalesMain extends Component {
    displayName = SalesMain.name
    constructor(props) {
        super(props)
    
        this.state = {
            error: null,
            isLoaded: false,
            isedit: false,
            items: []
        };

    }
    componentDidMount()
    {
        this.fetchData()
        console.log(this.state.items)
    }

    fetchData() {
        fetch('api/Sales')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    
    render() {
        const { error, isLoaded, items, isedit } = this.state;
            console.log(this.state)
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <div>
                    <h1>Hello</h1>

                    {/* <SalesTable items={this.state.items}
                       // isedit={this.state.isedit}
                        //onDelete={this.handleDelete}
                        //onEdit={this.onEdit}

                    /> */}


                </div>
            );

    }
}

}
