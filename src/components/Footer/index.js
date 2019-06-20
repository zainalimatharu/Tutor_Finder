import React, { Component } from 'react';
import './style.css';
import placeholder1 from './placeholder1.png';
import facebook1 from './facebook1.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

class Bottom extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <div className="row" style={{backgroundColor: "#343f4b", color: "#CFD0D6", margin: "0px"}}>
                <MultiColorBarForBottom />
                <footer className="page-footer">
                    <div className="row" style={{marginTop: "30px", marginBottom: "40px"}}>
                        <div className="col s12 l7 offset-l1">
                            <div className="container">
                                <div className="col s3 l2">
                                    <div className="col l12" style={{marginTop: "5px"}}>
                                        <img style={{width: "90%"}} src={placeholder1} alt="" />
                                    </div>
                                </div>
                                <div className="col s9 l10" style={{marginTop: "-5px", fontWeight: "450", fontSize: ".9rem", padding: "0px"}}>
                                    <p style={{letterSpacing: ".05rem"}}>Saleem Pura Stop, Hafizabad Road, Gujranwala.<br />
                                    To see location at google maps <a href="https://goo.gl/maps/VsCtj5RyFQtu8Po27">Click Here!</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 l7 offset-l1">
                            <div className="container">
                                <div className="col s3 l2" style={{padding: "0px 0px 0px 20px"}}>
                                    <div className="col l12" style={{marginTop: "5px"}}>
                                        <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
                                    </div>
                                </div>
                                <div className="col s9 l10" style={{marginTop: "-5px", fontWeight: "450", fontSize: ".9rem", padding: "0px"}}>
                                    <p><i style={{letterSpacing: ".1rem"}}>0321-7464553</i></p>
                                </div>
                            </div>
                        </div>
                        <div className="col s8 offset-s2 l4">
                            <div className="container" style={{width: "70%", marginTop: "10px"}}>
                                <img src={facebook1} alt="" style={{marginRight: "10px"}} />
                                <img src={twitter} alt="" style={{marginRight: "10px"}} />
                                <img src={linkedin} alt="" />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="row" style={{height: "1px", backgroundColor: "#CFD0D6", margin: "0px"}}>
                
            </div>
            <div className="row" style={{backgroundColor: "#293038", margin: "0px"}}>
                <div className="container">
                    <h6 className="left" style={{margin: "0px", padding: "10px", color:"#CFD0D6", fontSize: "1rem"}}>Copyright © Al-madinaDispensary</h6>
                    <h6 className="right" style={{margin: "0px", padding: "10px", color:"#CFD0D6", fontSize: "1rem"}}>Developed by: theCodingHuman</h6>
                </div>
            </div>
            </div>
        );
    }
}

class MultiColorBarForBottom extends Component {
    state = {  }
    render() {
        return (
            <div className="row" id="multiColorBarForBottom">
                
            </div>
        );
    }
}
 
export default Bottom;