import React from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state={data:null}
        console.warn("----Constructor---");
        
    }
    // componentWillMount() {
    //     console.warn("----componentWillMount ---");
    // }
    componentDidMount(){
        this.setState({data:"Updated"})
        console.warn("----ComponentDidMount ---");
    }

   

    render() {
        console.warn("----Render ---");
        return (
            <div>
                Life Cycle
            </div> 
        );
    }
}


export default LifeCycle
