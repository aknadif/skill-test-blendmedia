import React from 'react';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
import {CLink} from "@/components";

const MENU_OPTIONS = [
    {
        label: 'Home',
        icon: 'eva:home-fill',
    },
    {
        label: 'Profile',
        icon: 'eva:person-fill',
    },
    {
        label: 'Settings',
        icon: 'eva:settings-2-fill',
    },
];

// ----------------------------------------------------------------------

const AccountPopover = () => {
    const [open, setOpen] = React.useState(null);

    const handleOpen = (event:any) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return (
        <>
            <IconButton onClick={handleOpen}>
                <Avatar src={''} alt="photoURL" />
            </IconButton>

            <Popover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 0,
                        mt: 1.5,
                        ml: 0.75,
                        width: 180,
                        '& .MuiMenuItem-root': {
                            typography: 'body2',
                            borderRadius: 0.75,
                        },
                    },
                }}
            >
                <Box sx={{ my: 1.5, px: 2.5 }}>
                    <Typography variant="subtitle2" noWrap>
                        aknadhif
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        aknadif58@gmail.com
                    </Typography>
                </Box>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Stack sx={{ p: 1 }}>
                    {MENU_OPTIONS.map((option) => (
                        <MenuItem key={option.label} onClick={handleClose}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <CLink href={'/login'}>
                    <MenuItem onClick={handleClose} sx={{ m: 1 }}>
                        Logout
                    </MenuItem>
                </CLink>
            </Popover>
        </>
    );
}

export default AccountPopover;
