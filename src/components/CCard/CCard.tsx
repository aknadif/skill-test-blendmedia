import React from "react";
import {Card} from "@mui/material";

interface CCardsProps {
    children?: React.ReactNode;

}
const CCard = ({children}:CCardsProps) => {
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '80vh',
                borderRadius: 2,
                boxShadow: 1,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                p: 2,
            }}
        >
            {children}
        </Card>
    )
}

export default CCard
