import React from 'react';
import {useRouter} from "next/router";
import {
    Box,
    Grid,
    Container
} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import {
    CLink,
    CAvatar,
    CButton,
    CCheckbox,
    Copyright,
    CTextField,
    CTypography,
    CFormControlLabel
} from "@/components";

const Login = () => {
    const router = useRouter();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        router.push('/dashboard/dashboards');
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
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <CTextField category={'email'} autoFocus/>
                    <CTextField category={'password'} />
                    <CFormControlLabel
                        control={<CCheckbox value={"remember"} />}
                        label={"Remember me"}
                    />
                    <CButton
                        type={'submit'}
                        fullWidth
                        variant={'contained'}
                        sx={{ mt: 3, mb: 2 }}
                        text={'Sign In'} />
                    <Grid container>
                        <Grid item>
                            <CLink
                                href={"/register"}
                                text={"Don't have an account? Sign Up"}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}

export default Login
