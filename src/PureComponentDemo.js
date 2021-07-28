import React,{Component,PureComponent} from 'react';
class PureComponentDemo extends PureComponent {
    constructor(props) {
        super(props);
        this.state={data:10}
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>PureComponent {this.state.data}</h1>
                <button onClick={()=>this.setState({data:50})}>Click</button>
            </div>
        );
    }
}
export default PureComponentDemo
