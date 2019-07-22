import React, { Component } from 'react'
import { Header, Image, Button, Checkbox, Form } from 'semantic-ui-react'
import '../css/login.css'

class Login extends Component {
    render() {
        return (
            <div className="custom-form">
                <Form>
                    <div className='logo'>
                        <Image src={require('../assets/university.png')} size='small' />
                        <Header as='h3'>Campus Recruitment System</Header>
                    </div>
                    <Header as='h2' className='header-login'>Login</Header>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Email' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Login