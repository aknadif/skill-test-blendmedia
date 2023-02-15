import React from "react";
import Avatar from '@mui/material/Avatar';

interface CAvatarProps {
    children?: React.ReactNode;
}

const CAvatar = ({
    children,
}: CAvatarProps) => {
    return (
        <>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                {children}
            </Avatar>
        </>
    )
};

export default CAvatar;
