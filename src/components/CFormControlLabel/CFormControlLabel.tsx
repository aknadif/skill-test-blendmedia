import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import {CCheckbox} from "@/components";

interface CFormControlLabelProps {
    control: React.ReactElement;
    label: string;
}
const CFormControlLabel = ({
    control,
    label
}:CFormControlLabelProps) => {
    return (
        <FormControlLabel
            control={control}
            label={label}
        />
    )
}

export default CFormControlLabel;
