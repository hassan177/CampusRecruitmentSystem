import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../css/student_home.css'

class StudentHome extends Component {

    // openSlideMenu = () => {
    //     document.getElementById('menu').style.width = '250px';
    //     document.getElementById('content').style.marginLeft = '250px';
    // }
    // closeSlideMenu = () => {
    //     document.getElementById('menu').style.width = '0';
    //     document.getElementById('content').style.marginLeft = '0';
    // }

    render() {
        return (
            <div id='content'>
                <div id='menu' className='nav'>
                    <div className="logo">
                        <img src={require('../assets/university.png')} width="70px" />
                    </div>

                    <a href='#'><i className="fa fa-user-circle"></i>Profile</a>
                    <a href='#'><i className="fa fa-window-maximize"></i>Noticeboard</a>
                    <a href='#'><i className="fa fa-users"></i>Companies</a>
                    <a href="#"><i className="fa fa-sticky-note"></i>Jobs</a>
                </div>
                <div className="navbar">
                    <h2>Profile</h2>
                    <div className="nav-right">
                        <img src={require('../assets/mathew.png')} width="45px" />
                        <span>Logout</span>
                    </div>
                </div>
                <div className='body'>
                    <div className="ui card">
                        <div className="image"><img src={require('../assets/mathew.png')} /></div>
                        <div className="content">
                            <div className="header">Matthew</div>
                            <div className="meta"><span className="date">Joined in 2015</span></div>
                            <div className="description">Matthew is a musician living in Nashville.</div>
                        </div>
                        <div className="extra content">
                            <a>
                                <i aria-hidden="true" className="user icon"></i>
                                22 Friends
                            </a>
                        </div>
                    </div>
                    <form className="ui form">
                        <h1>Details</h1>
                        <div className="two fields">
                            <div className="field">
                                <label>Name</label>
                                <div className="ui fluid input"><input type="text" placeholder="Read only" readonly="" /></div>
                            </div>
                            <div className="field">
                                <label>Department</label>
                                <div className="ui fluid input"><input type="text" placeholder="Read only" readonly="" /></div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>Age</label>
                                <div className="ui input"><input type="text" placeholder="Address" /></div>
                            </div>
                            <div className="field">
                                <label>Gender</label>
                                <div className="ui input"><input type="text" placeholder="Phone" /></div>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>Measure</label>
                                <div className="ui input"><input type="text" placeholder="Address" /></div>
                            </div>
                            <div className="field">
                                <label>CGPA</label>
                                <div className="ui input"><input type="text" placeholder="Phone" /></div>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>Skills</label>
                                <div className="ui input"><input type="text" placeholder="Address" /></div>
                            </div>
                            <div className="field">
                                <label>Hobbies</label>
                                <div className="ui input"><input type="text" placeholder="Phone" /></div>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        )
    }
}

export default StudentHome;