import React, { Component } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

class Linktoportals extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" style={{margin: "0px"}}>
                <div className="row" id="linktoforms">
                    <a href="#wrapper" className="col s12 m6 l4 offset-l2">
                        <div className="col s8 offset-s2">
                            <h6 className="center-align">Become a Tutor</h6>
                        </div>
                    </a>
                    <div className="col s12 m6 offset-m3 l4">
                        <NavLink to="/postlearningrequest">
                            <div className="col s8 offset-s2">
                                <h6 className="center-align">Post a learning Request</h6>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Linktoportals;