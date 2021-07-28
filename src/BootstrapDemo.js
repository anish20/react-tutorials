import React, { Component } from 'react';
import {Container,Button} from 'react-bootstrap'
 
class BootstrapDemo extends Component {
    render() { 
        return (
            <div>
                <Container>
                <Button className="btn-secondary btn-sm" onClick={()=>alert("Hello")} >Click Me</Button>
            
                </Container>
            </div>
        );
    }
}
 
export default BootstrapDemo;