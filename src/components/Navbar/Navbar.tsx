import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery, Link, Box,
} from "@mui/material"
import DrawerComponent from "./DrawerComponent";

function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar
            color={'transparent'}
            position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h5"
                sx={{
                    logo: {
                        flexGrow: "1",
                        cursor: "pointer",
                    },
                    p: 2,
                    width: "300px",
                }}>
                    Skill Test
                </Typography>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <Box
                        sx={{
                            width: "100%",
                        marginLeft: theme.spacing(5),
                        display: "flex",
                        justifyContent: "flex-end",
                    }}>
                        <Link
                            href={"/login"}
                            sx={{
                                textDecoration: "none",
                                color: "black",
                                fontSize: "20px",
                                marginLeft: theme.spacing(20),
                                "&:hover": {
                                    color: "blue",
                                    borderBottom: "1px solid white",
                                },
                            }}>
                            Login
                        </Link>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
