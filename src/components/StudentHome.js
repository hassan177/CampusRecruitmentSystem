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
                    <a href='#'><i class="fa fa-user-circle"></i>Profile</a>
                    <a href='#'><i class="fa fa-window-maximize"></i>Noticeboard</a>
                    <a href='#'><i class="fa fa-users"></i>Companies</a>
                    <a href="#"><i class="fa fa-sticky-note"></i>Jobs</a>
                </div>
                <div className="navbar">
                    <h3>Hassan Irshad</h3>
                    <div className="nav-right">
                        <img src='https://via.placeholder.com/150' width="55px" />
                        <span>Logout</span>
                    </div>
                </div>
                <div className='body'>
                    <h1>Hello World</h1>
                </div>
            </div>
        )
    }
}

export default StudentHome;