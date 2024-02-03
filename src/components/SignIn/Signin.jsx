import { Button, InputLabel, TextField } from '@mui/material'
import React from 'react'
import './Signin.css'

const Signin = () => {
    return (
        <div >
            <div id='signinForm'>
                <form id='form'>
                    <h2 style={{textAlign:'center'}}>Sign In</h2>
                    <InputLabel>Email id</InputLabel>
                    <TextField className='inputField' label="Enter your Email id" variant="filled" type='email' />
                    <InputLabel>Password</InputLabel>
                    <TextField className='inputField' label="Enter your Password" variant="filled" type='password' />
                    <br/><Button variant='outlined' style={{width:'50px',margin:'0 auto'}}>Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Signin