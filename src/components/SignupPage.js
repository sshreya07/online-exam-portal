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
import { Lock,Person, AlternateEmail} from '@material-ui/icons';
import img from './backgroundNew.jpg';

const SignupPage = () => {
    return (
        <div className="loginPage">
            <div className="onboard">
            <ul>
            <li>
              <Link to="/login" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">Login</Button></Link>
              </li>
             </ul>
            </div>
            <div><img src={img} alt="books" className="BG" /></div>
            
            <div className="signup-section">

                <Card style={{width:'25rem', height:'25rem'}} variant="outlined">
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
                                startAdornment: <InputAdornment position="start"><AlternateEmail></AlternateEmail></InputAdornment>,
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
                                        variant="outlined" />
                                </FormControl>
                            <FormControl><TextField
                            label="password"
                            className="input-bar"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Lock></Lock></InputAdornment>,
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
