import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand m-auto" style={{fontSize: 50}}>Blogz</span>
                <ul className="navbar-nav">
                <Router>
                    <li className="nav-item active">
                        <Link to={"/"}><span className="nav-link">Home<span className="sr-only">(current)</span></span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/admin"}><span className="nav-link">Admin</span></Link>
                    </li>
                </Router>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;
