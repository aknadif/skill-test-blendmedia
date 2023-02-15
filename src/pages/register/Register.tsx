import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import {
    Box,
    Grid,
    Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
    CLink,
    CAvatar,
    CButton,
    CCheckbox,
    Copyright,
    CTextField,
    CTypography,
    CFormControlLabel,
} from "@/components";

const Register = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <CAvatar>
                    <LockOutlinedIcon />
                </CAvatar>
                <CTypography
                    text={'Sign in'}
                    component={'h1'}
                    variant={'h5'}
                />
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                           <CTextField category={'firstName'} autoFocus/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <CTextField category={'lastName'} />
                        </Grid>
                        <Grid item xs={12}>
                            <CTextField category={'email'} />
                        </Grid>
                        <Grid item xs={12}>
                            <CTextField category={'password'} />
                        </Grid>
                        <Grid item xs={12}>
                            <CFormControlLabel
                                control={<CCheckbox value={"allowExtraEmails"} />}
                                label={"I want to receive inspiration, marketing promotions and updates via email."}
                            />
                        </Grid>
                    </Grid>
                    <CButton
                        type={'submit'}
                        fullWidth
                        variant={'contained'}
                        sx={{ mt: 3, mb: 2 }}
                        text={'Sign Up'} />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <CLink href={'login'} text={"Already have an account? Sign in"} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}

export default Register
