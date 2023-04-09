import { Button, Card, CardContent, FormControl, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import axios from "../../../plugins/axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [login, setLogin] = useState({
        'username': '',
        'password': ''
    })
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <Grid container spacing={2} style={{padding: 20, backgroundColor: '#F0F2F5', height: '100vh'}}>
                    <Grid item xs={6} md={6}>
                        <h1>Grid 6</h1>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Card>
                            <CardContent>
                                <FormControl fullWidth>
                                    <TextField variant="outlined" placeholder="Email" label="Email" value={login.username} onChange={(event) => {
                                        setLogin({
                                            ...login,
                                            username: event.target.value
                                        })
                                    }}/>
                                    <TextField variant="outlined" placeholder="Password" type="password" value={login.password} label="Password" style={{marginTop: 15, marginBottom: 15}} onChange={(event) => {
                                        setLogin({
                                            ...login,
                                            password: event.target.value
                                        })
                                    }}/>
                                    <Button variant="contained" style={{backgroundColor: '#1877F2'}} size="large" onClick={() => {
                                        axios.post('accounts/token/login', login).then(response => {
                                            localStorage.setItem('token', response.data.auth_token);
                                            navigate("/application")
                                        })
                                    }}>Login</Button>
                                    <br style={{marginTop: 15}} />
                                    <Button variant="contained" style={{backgroundColor: '#42B72A'}} size="large" onClick={() => {
                                        navigate("/registration")
                                    }}>
                                        Create Account
                                    </Button>
                                </FormControl>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Register