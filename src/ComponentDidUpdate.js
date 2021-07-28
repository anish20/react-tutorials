import React from 'react';
class ComponentDidUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state={active:null,who:null}
    }

    setActivate(){
        this.setState({active:"Yes"});
    }
    componentDidUpdate() {

        console.warn("componentDidUpdate");
        if(this.state.who==null){
        this.setState({who:"Anish"});
        }
    }
    render() {
        return (
            <div>
                <h1>ComponentDidUpdate</h1>
                <h1>{this.state.who}</h1>
                <button onClick={this.setActivate.bind(this)}>Activate</button>
            </div>
        );
    }
}

export default ComponentDidUpdate
