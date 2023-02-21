import { Button, Card, CardContent, FormControl, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";

function Register() {

    return (
        <>
            <Container maxWidth>
                <Grid container spacing={2} style={{padding: 20, backgroundColor: '#F0F2F5', height: '100vh'}}>
                    <Grid item xs={6} md={6}>
                        <h1>Grid 6</h1>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Card>
                            <CardContent>
                                <FormControl fullWidth>
                                    <TextField variant="outlined" placeholder="Email" label="Email" />
                                    <TextField variant="outlined" placeholder="Password" type="password" label="Password" style={{marginTop: 15, marginBottom: 15}} />
                                    <Button variant="contained" style={{backgroundColor: '#1877F2'}} size="large">Login</Button>
                                    <br style={{marginTop: 15}} />
                                    <Button variant="contained" style={{backgroundColor: '#42B72A'}} size="large">
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