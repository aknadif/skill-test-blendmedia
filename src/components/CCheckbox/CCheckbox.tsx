import React from "react";
import Checkbox from "@mui/material/Checkbox";

interface CCheckboxProps {
    value: string;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
}
const CCheckbox = ({
    value,
    color = 'primary'
}:CCheckboxProps) => {
    return (
        <Checkbox value={value} color={color} />
    )
};

export default CCheckbox;
