import React from 'react';
import Button from '@mui/material/Button';

interface CButtonProps {
    type: string;
    fullWidth: boolean;
    variant: string;
    props?: any;
    text: string;
    color?: string;
    sx?: any;
    onClick?: () => void;
}
const CButton = ({
    type,
    fullWidth,
    variant,
    props,
    text,
    color = 'primary',
    onClick = () => {},
    sx
}:CButtonProps) => {
    return (
        <Button
            type={type}
            fullWidth={fullWidth}
            variant={variant}
            color={color}
            sx={sx}
            onClick={onClick}
            {...props}
        >
            {text}
        </Button>
    )
};

export default CButton;
