import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../css/student_home.css'

class StudentHome extends Component {

    openSlideMenu = () => {
        document.getElementById('menu').style.width = '250px';
        document.getElementById('content').style.marginLeft = '250px';
    }
    closeSlideMenu = () => {
        document.getElementById('menu').style.width = '0';
        document.getElementById('content').style.marginLeft = '0';
    }

    render() {
        return (
            <div id='content'>
                <span className='slide'>
                    <a href='#' onClick={() => {this.openSlideMenu()}}>
                        <i className='fa fa-bars'></i>
                    </a>
                </span>
                <div id='menu' className='nav'>
                    <a className='close' onClick={() => {this.closeSlideMenu()}}>
                        <i className='fa fa-times'></i>   
                    </a>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                </div>
                <h1>Hello World</h1>
            </div>

        //     <Sidebar.Pushable as={Segment}>
        //     <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
        //         <Menu.Item as='a'>
        //             <Icon name='home' />
        //             Home
        //         </Menu.Item>
        //         <Menu.Item as='a'>
        //             <Icon name='gamepad' />
        //             Games
        //         </Menu.Item>
        //         <Menu.Item as='a'>
        //             <Icon name='camera' />
        //             Channels
        //     </Menu.Item>
        //     </Sidebar>

        //     <Sidebar.Pusher>
        //         <Segment basic>
        //             <Header as='h3'>Application Contentadasfasfakfakfjkancfkahcnhnhacnhalnhcajj</Header>
        //             <Image src='/images/wireframe/paragraph.png' />
        //         </Segment>
        //     </Sidebar.Pusher>
        // </Sidebar.Pushable>
          
        )
    }
}

export default StudentHome;