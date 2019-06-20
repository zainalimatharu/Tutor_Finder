import React, { Component } from 'react';
import './style.css';
import completedtask from './completedtask.png';

class Postlearningrequest extends Component {
    state = {  }
    render() {
        return (
            <div className="row" id="postlearningrequest">
                <div className="col s12">
                    <h4 className="center-align"><img src={completedtask} alt="After Sign up"/></h4>
                </div>
                <div className="col s12">
                    <h5 className="center-align" style={{marginBottom: "35px"}}>Post Learning Request</h5>
                </div>
                <div className="col l8 offset-l2 m10 offset-m1 s12">
                    <form>
                        <div className="col l7 m7 s8">
                            <input placeholder="Enter Subject or class of your interset" type="text" name="name" className="browser-default" />
                            <input placeholder="Enter Qualification of Tutor required" type="text" name="name" className="browser-default" />
                            <input placeholder="Enter your City" type="text" name="name" className="browser-default" />
                            <input placeholder="Enter your Contact Number" type="text" name="name" className="browser-default" />
                            <input placeholder="Enter your Email" type="text" name="name" className="browser-default" />
                            <textarea name="details" id="" cols="30" rows="10" placeholder="Specify other details about the Learning request if neccessary"></textarea>
                            <div className="row" style={{paddingRight: "11.250px"}}>
                                <button type="submit" className="right">
                                    Post
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Postlearningrequest;