import React from 'react';
import {
    InputAdornment,
    TextField,
    Button,
    Card,
    CardContent,
    FormControl,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { Lock, School, Email ,Person} from '@material-ui/icons';

const SignupPage = () => {
    return (
        <div className="loginPage">
            <div className="onboard">
            <ul>
            <li>
              <Link to="/login" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">login</Button></Link>
              </li>
             </ul>
            </div>
            <div className="signup-section">

<Card style={{width:'25rem', height:'30rem'}} variant="outlined">
    <CardContent >
        <div className="heading" style={{color: '#530c90'}}>
        Sign Up
        </div>
        <div className="input-section">
                <FormControl>
                    <TextField
            label="email"
            className="input-bar"
            InputProps={{
                startAdornment: <InputAdornment position="start"><Email></Email></InputAdornment>,
            }}
            variant="outlined"
                />
                </FormControl>
                <FormControl>
                                    <TextField
                            label="username"
                            className="input-bar"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Person></Person></InputAdornment>,
                            }}
                            variant="outlined"
                                /></FormControl>
            <FormControl><TextField
            label="password"
            className="input-bar"
            InputProps={{
                startAdornment: <InputAdornment position="start"><Lock></Lock></InputAdornment>,
            }}
            variant="outlined"
            /></FormControl>
           
            <FormControl><TextField
            label="enrollment Id"
            className="input-bar"
            InputProps={{
                startAdornment: <InputAdornment position="start"><School></School></InputAdornment>,
            }}
            variant="outlined"
            /></FormControl>
            <div><Link to="/dashboard" style={{textDecoration:'none',position:'relative',top:'3rem'}}><Button variant="outlined">Register</Button></Link></div>
        </div>
    </CardContent>
</Card>
</div>
        </div>
    )
}

export default SignupPage
