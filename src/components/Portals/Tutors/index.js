import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserGraduate,
    faMapMarkerAlt,
    faBookReader,
    faBriefcase,
    faPhoneAlt,
    faMailBulk
} from '@fortawesome/free-solid-svg-icons';
import man from './man.png';
import './style.css';
import { connect } from 'react-redux';

class Tutorsportal extends Component {
    
    render() { 
        return (
            <div className="row" id="tutorsportal">
                <div className="col l10 offset-l1 m10 offset-m1 s12">
                    <h3 className="center-align">Tutors</h3>
                    <div className="row">
                        <div className="col l9 m9 s10 offset-s1" style={{padding: "0px"}}>
                            <TutorProfile />
                        </div>
                        <div className="col l3 m3 s12">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class TutorProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery:''
            ,
            tutors: [
                {
                    id: Math.random(),
                    nameOfTutor: "Zain Ali",
                    tagNameOfTutor: "@MERNengg",
                    emailOfTutor: "zainalimatharu@gmail.com",
                    designation: "Tutor",
                    qualificationOfTutor: "Bs-Software Engineering",
                    graduatedFrom: "University of Agriculture, Faisalabad.",
                    residenceofTutor: "Gujranwala, Pakistan.",
                    mblNumberOfTutor: "0340-5943551" 
                },
                {
                    id: Math.random(),
                    nameOfTutor: "Usama Ashraf",
                    tagNameOfTutor: "@MERNengg",
                    emailOfTutor: "zainalimatharu@gmail.com",
                    designation: "Tutor",
                    qualificationOfTutor: "Bs-Software Engineering",
                    graduatedFrom: "University of Agriculture, Faisalabad.",
                    residenceofTutor: "Gujranwala, Pakistan.",
                    mblNumberOfTutor: "0340-5943551" 
                },
                {
                    id: Math.random(),
                    nameOfTutor: "Zeyam Ali",
                    tagNameOfTutor: "@MERNengg",
                    emailOfTutor: "zainalimatharu@gmail.com",
                    designation: "Tutor",
                    qualificationOfTutor: "Bs-Software Engineering",
                    graduatedFrom: "University of Agriculture, Faisalabad.",
                    residenceofTutor: "Gujranwala, Pakistan.",
                    mblNumberOfTutor: "0340-5943551" 
                }
            ]
        }
    }

    searchingForName = searchQuery => {
        return function(item) {
          return (
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
              item.email.toLowerCase().includes(searchQuery.toLowerCase()) || 
              item.degreeTitle.toLowerCase().includes(searchQuery.toLowerCase()) || 
              item.tagName.toLowerCase().includes(searchQuery.toLowerCase()) || 
              !searchQuery
          );
        };
      };

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
        console.log('data from db',this.props.data);
        
        return (
            <div>
                <div style={{width:'80%'}} className="row" id="searchFilter">
                    <div class="col s6">
                    <input className="browser-default validate" placeholder="Search Tutor by Name" id="first_name" onChange={(e)=> this.setState({searchQuery:e.target.value})}  type="text" />
                    </div>
                    <div class="col s6">
                    <input className="browser-default validate" placeholder="Search Tutor by Email" id="last_name" onChange={(e)=> this.setState({searchQuery:e.target.value})} type="text" /> 
                
                    </div>
                    <div class="col s6">
                    <input className="browser-default validate" placeholder="Search Tutor by Qualification" onChange={(e)=> this.setState({searchQuery:e.target.value})} id="first_name" type="text" />
                    
                    </div>
                    <div class="col s6">
                    <input className="browser-default validate" placeholder="Search Tutor by Subject" id="last_name" onChange={(e)=> this.setState({searchQuery:e.target.value})} type="text" /> 
                    
                    </div>
                </div>
                {this.props.data.length > 0 ? 
                this.props.data.filter(this.searchingForName(searchQuery)).map(tutor => {
                    return (
                        <div style={{width:'80%'}} key={tutor.id} className="row z-depth-1 hoverable" id="tutorprofile">
                            <div className="col l3 m3 s3" id="tutordp">
                                <h6 className="center-align">
                                    <img src={man} style={{width: "80%"}} alt=""/>
                                </h6>
                            </div>
                            <div className="col l9 m9 s9" id="tutordata" style={{padding: "15px"}}>
                                <h5 className="center-align" style={{marginBottom: "0px"}}>{tutor.name}</h5>
                                <p className="center-align" style={{fontSize: "0.8rem", color: "#8A8A8A", margin: "0px"}}>{tutor.tagName}</p>
                                <div className="row myrow">
                                    <div className="col l1 m1 s1" style={{padding: "0px"}}>
                                        <FontAwesomeIcon icon={faBookReader} size="lg" />
                                    </div>
                                    <div className="l11 m11 s11" style={{padding: "0px"}}>
                                        <p style={{margin: "0px"}}>{tutor.tagName}</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l1 m1 s1" style={{padding: "0px"}}>
                                        <FontAwesomeIcon icon={faUserGraduate} size="lg" />
                                    </div>
                                    <div className="l11 m11 s11" style={{padding: "0px"}}>
                                        <p style={{margin: "0px"}}>{tutor.degreeTitle}</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l1 m1 s1" style={{padding: "0px"}}>
                                        <FontAwesomeIcon icon={faBriefcase} size="lg" />
                                    </div>
                                    <div className="l11 m11 s11" style={{padding: "0px"}}>
                                        <p style={{margin: "0px"}}>{tutor.degreeInstitute}</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l1 m1 s1" style={{padding: "0px"}}>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                                    </div>
                                    <div className="l11 m11 s11" style={{padding: "0px"}}>
                                        <p style={{margin: "0px"}}>{tutor.currentResidence}</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l1 m1 s1" style={{padding: "0px"}}>
                                        <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
                                    </div>
                                    <div className="l11 m11 s11" style={{padding: "0px"}}>
                                        <p style={{margin: "0px"}}>{tutor.mblNumber}</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l1 m1 s1" style={{padding: "0px"}}>
                                        <FontAwesomeIcon icon={faMailBulk} size="lg" />
                                    </div>
                                    <div className="l11 m11 s11" style={{padding: "0px"}}>
                                        <p style={{margin: "0px"}}>{tutor.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }) : 
                <div className="row">
                    <h5 className="center-align">No Tutor Find</h5>
                </div>
                }
            </div>
        );
    }
}
 


 const mapStateToProps = state => {
    return {
      data: state.postReducer.allPosts
    };
  };
  export default connect(mapStateToProps)(TutorProfile);