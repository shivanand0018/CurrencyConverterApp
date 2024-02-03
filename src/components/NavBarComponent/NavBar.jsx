import React from 'react'
import './NavBar.css';
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id='navbar'>
      <div id='div1'>
        <Link to='/' style={{textDecoration:'none'}}><h2 id='title'>Currency Converter App</h2></Link>
      </div>
      <div id='div2'>
        <Link to='/signin'><Button variant="contained" >Sign In</Button></Link>{' '}
        <Link to='/register'><Button variant='outlined'>Register</Button></Link>
      </div>
    </div>
  )
}

export default NavBar