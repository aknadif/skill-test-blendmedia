import React from "react";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const CAvatar = () => {
    return (
        <>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
        </>
    )
};

export default CAvatar;
