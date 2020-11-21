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
import { Lock, Person } from '@material-ui/icons';

const LoginPage = () => {
    return (
        <div className="loginPage">
            <div className="onboard">
            <ul>
            <li>
              <Link to="/signup" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">Sign UP</Button></Link>
              </li>
             </ul>
            </div>
            <div className="login-section">

                <Card style={{width:'25rem', height:'22rem'}} variant="outlined">
                    <CardContent >
                        <div className="heading" style={{color: '#530c90'}}>
                        Sign In
                        </div>
                        <div className="input-section">
                                <FormControl>
                                    <TextField
                            label="username"
                            className="input-bar"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Person></Person></InputAdornment>,
                            }}
                            variant="outlined"
                                />
                                </FormControl>
                            <FormControl><TextField
                            label="password"
                            className="input-bar"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Lock></Lock></InputAdornment>,
                            }}
                            variant="outlined"
                            /></FormControl>
                            <div><Link to="/dashboard" style={{textDecoration:'none',position:'relative',top:'3rem'}}><Button variant="outlined">LOGIN</Button></Link></div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    )
}

export default LoginPage
