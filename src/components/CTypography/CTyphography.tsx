import React from "react";
import Typography from '@mui/material/Typography';

interface CTyphographyProps {
    text: string;
    props?: any;
    sx?: any;
    component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline' | 'srOnly' | 'inherit',
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline' | 'srOnly' | 'inherit',
}
const CTyphography = ({
    text,
    variant,
    component,
    props,
    sx = {}
}: CTyphographyProps) => {
    return (
        <Typography component={component} variant={variant} sx={sx} {...props}>
            {text}
        </Typography>
    )
};

export default CTyphography;
