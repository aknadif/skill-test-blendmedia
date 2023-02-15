import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import {CLink} from "@/components";

const data = [
    {
        id: 1,
        name: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard/dashboards"
    },
    {
        id: 2,
        name: "Products",
        icon: <ShoppingCartIcon />,
        link: "/dashboard/products"
    },
    {
        id: 3,
        name: "Users",
        icon: <PeopleIcon />,
        link: "/dashboard/users"
    },
    {
        id: 4,
        name: "Account",
        icon: <PeopleIcon />,
        link: "/dashboard/account"
    }
];
export const mainListItems = (
    <React.Fragment>
        {data.map((item, index) => (
            <CLink
                href={item.link}
                key={index}>
                <ListItemButton>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItemButton>
            </CLink>
        ))}
    </React.Fragment>
);
