import React from 'react';
import User from './User';

class ComponentWillUnmount extends React.Component {
    constructor(props) {
        super(props);
        this.state={toggle:true}
    }

   
    render() {
        return (
            <div>

                <h1>ComponentWillUnmount</h1>
                
       {this.state.toggle ? <User /> : null }
        
        <button onClick={()=>this.setState({toggle:!this.state.toggle})}>Delete</button>
            </div>
        );
    }
}


export default ComponentWillUnmount
