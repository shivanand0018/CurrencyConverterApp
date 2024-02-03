import React from 'react'
import './Register.css'
import { Button, InputLabel, TextField } from '@mui/material'

const Register = () => {
    return (
        <div>
            <div id='registerForm'>
                <form id='form1'>
                    <h2 style={{ textAlign: 'center' }}>Registration Form</h2>
                    <InputLabel>Full Name</InputLabel>
                    <TextField className='inputField' label="Enter your Name" variant="filled" type='text' />
                    <InputLabel>Email id</InputLabel>
                    <TextField className='inputField' label="Enter your Email id" variant="filled" type='email' />
                    <InputLabel>Password</InputLabel>
                    <TextField className='inputField' label="Enter your Password" variant="filled" type='password' />
                    <InputLabel>Confirm Password</InputLabel>
                    <TextField className='inputField' label="Re-enter your Password" variant="filled" type='password' />
                    <br /><Button variant='outlined' style={{ width: '80px', margin: '0 auto' }}>Register</Button>
                </form>
            </div>
        </div>
    )
}

export default Register