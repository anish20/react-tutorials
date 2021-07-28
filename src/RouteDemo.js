import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
class RouteDemo extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
               <Router>
                   <Link to="" >Home</Link>| 
                   <Link to="/about" >About</Link>| 
                   <Link to="/contact" >Contact</Link>
                   <Route exact path="/" component={Home} />
                   <Route path="/about" component={About} />
                   <Route path="/contact" component={Contact} />
               </Router>
            </div>
        );
    }
}

export default RouteDemo
