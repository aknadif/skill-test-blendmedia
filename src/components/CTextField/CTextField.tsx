import React from "react";
import TextField from "@mui/material/TextField";

interface CTextFieldProps {
    margin?: "none" | "dense" | "normal";
    required?: boolean;
    fullWidth?: boolean;
    category?: "email" | "password" | "firstName" | "lastName";
    autoFocus?: boolean;
}

const CTextField = ({
    margin = "normal",
    required = true,
    fullWidth = true,
    category = "email",
    autoFocus = false,
}: CTextFieldProps) => {
    let name, label, autoComplete, type;

    switch (category) {
        case "firstName":
            name = "firstName";
            label = "First Name";
            autoComplete = "given-name";
            break;

        case "lastName":
            name = "lastName";
            label = "Last Name";
            autoComplete = "family-name";
            break;

        case "email":
            name = "email";
            label = "Email Address";
            autoComplete = "email";
            break;

        case "password":
            name = "password";
            label = "Password";
            type = "password";
            autoComplete = "new-password";
            break;
    }

    return (
        <TextField
            margin={margin}
            required={required}
            fullWidth={fullWidth}
            name={name}
            label={label}
            type={type}
            id={category}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
        />
    );
};

export default CTextField;
