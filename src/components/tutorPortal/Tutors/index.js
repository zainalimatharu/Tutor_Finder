import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserGraduate,
    faMapMarkerAlt,
    faQuestionCircle,
    faBriefcase,
    faPhoneAlt,
    faMailBulk
} from '@fortawesome/free-solid-svg-icons';
import man from './man.png';
import './style.css';
import { connect } from 'react-redux';



class TutorProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery:''}
        }


//     currentResidence: "fsd"
// degreeInstitute: "uaf"
// degreeTitle: "bsse"
// email: "hatasipi@averdov.com"
// id: "wbAMV2chcZcCacmshV0v"
// mblNumber: "0303"
// name: "naveed-rana"
// password: "hatasipi@averdov.com"
// tagName: "math"

    render() {
        const {tutors,searchQuery} = this.state;
        const {tutor} = this.props;
        console.log('data from db',this.props.data);
        return (
            <div className="row">
                <div  className="row" id="tutorprofileview">
                    <div className="col l8 offset-l2 m8 offset-m2 s10 offset-s1" id="tutordp">
                        <div className="center-align col s3 offset-s1" style={{padding: "0px"}}>
                            <img src={man} style={{width: "70%"}} alt=""/>
                        </div>
                        <div className="col s8" style={{padding: "0px"}}>
                            <h3 style={{fontWeight: "800"}}>{tutor.name}</h3>
                            <p style={{fontWeight: "450", color: "#5E5E5E"}}>{tutor.tagName} Tutor</p>
                        </div>
                    </div>
                    <div className="col l10 offset-l1 m10 offset-m1 s12" id="tutordata" style={{padding: "15px"}}>
                                <div className="row myrow">
                                    <div className="col l2 m1 s1" style={{padding: "0px"}}>
                                        <div className="col s1" style={{padding: "0px"}}>
                                            <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                                        </div>
                                        <div className="col s8">
                                            <p style={{margin: "0px"}}>Status:</p>
                                        </div>
                                    </div>
                                    <div className="col l10 m10 s10" style={{padding: "0px"}}>
                                        <p style={{margin: "0px"}}>Tutor</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l2 m1 s1" style={{padding: "0px"}}>
                                        <div className="col s1" style={{padding: "0px"}}>
                                            <FontAwesomeIcon icon={faUserGraduate} size="lg" />
                                        </div>
                                        <div className="col s8">
                                            <p style={{margin: "0px"}}>Degree Title:</p>
                                        </div>
                                    </div>
                                    <div className="l10 m10 s10" style={{padding: "0px"}}>
                                        <p style={{margin: "0px"}}>{tutor.degreeTitle}</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l2 m1 s1" style={{padding: "0px"}}>
                                        <div className="col s1" style={{padding: "0px"}}>
                                            <FontAwesomeIcon icon={faBriefcase} size="lg" />
                                        </div>
                                        <div className="col s8">
                                            <p style={{margin: "0px"}}>Institute:</p>
                                        </div>
                                    </div>
                                    <div className="l10 m10 s10" style={{padding: "0px"}}>
                                        <p style={{margin: "0px"}}>{tutor.degreeInstitute}</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l2 m2 s2" style={{padding: "0px"}}>
                                        <div className="col s1" style={{padding: "0px"}}>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                                        </div>
                                        <div className="col s8">
                                            <p style={{margin: "0px"}}>Residence:</p>
                                        </div>
                                    </div>
                                    <div className="l10 m10 s10" style={{padding: "0px"}}>
                                        <p style={{margin: "0px"}}>{tutor.currentResidence}</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l2 m1 s1" style={{padding: "0px"}}>
                                        <div className="col s1" style={{padding: "0px"}}>
                                            <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
                                        </div>
                                        <div className="col s8">
                                            <p style={{margin: "0px"}}>Phone:</p>
                                        </div>
                                    </div>
                                    <div className="l10 m10 s10" style={{padding: "0px"}}>
                                        <p style={{margin: "0px"}}>{tutor.mblNumber}</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l2 m2 s2" style={{padding: "0px"}}>
                                        <div className="col s1" style={{padding: "0px"}}>
                                            <FontAwesomeIcon icon={faMailBulk} size="lg" />
                                        </div>
                                        <div className="col s8">
                                            <p style={{margin: "0px"}}>Email:</p>
                                        </div>
                                    </div>
                                    <div className="l10 m10 s10" style={{padding: "0px"}}>
                                        <p style={{margin: "0px"}}>{tutor.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                
            </div>
        );
    }
}
 


 const mapStateToProps = state => {
    return {
        tutor: state.userReducer.user
    };
  };
export default connect(mapStateToProps)(TutorProfile);