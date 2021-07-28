import React from 'react';

class HideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state={show:true,pin:0};
    }

    setPin(){
        this.setState({pin:222303});
    }

    render() {
        return (
           <div>
               {this.state.show ? <h1>Show and Hide </h1> : null }
               <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Me</button>
               <div>Pin : {this.state.pin}</div>
               <button onClick={()=>this.setPin()}>Get Pin</button>
               
           </div> 
        );
    }
}



export default HideShow
