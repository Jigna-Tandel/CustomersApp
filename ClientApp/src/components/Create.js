import React, { Component } from 'react';
import { Form } from './Form';
import { MyComponent } from './MyComponent';
import { GetData } from './GetData';
    

        export class Create extends Component {
    displayName = Create.name

    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);

        this.state={
            isadd:true
        }
       // console.log('Constructor',this.state.isadd)
    }
   componentDidMount(){
    this.setState({isadd:true})
   // console.log('ComponentdidMount',this.state.isadd )
   }


   componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
        this.setState({isadd:true});
      
    }
}
  

    onAdd(data) {
        
      
        return fetch('api/Customers', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).then(response => {alert('Record save Successfully'); 
            this.setState({isadd:false})})
              .catch(error => console.error('Error:', error));
           
      
    }

    render() {
       

               if (this.state.isadd)
               {
                  return(<div>
                <Form onAdd={this.onAdd} isadd={this.state.isadd}/>
                </div>
                )
               }
                else
                {
                    return(
                       
                        <div>
                           
                <MyComponent></MyComponent>
                
               
 
                            </div>)
                }

          
            }
}