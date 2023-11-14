import Item from "./Item.jsx";
import {Divider, List, ListItem, ListItemSecondaryAction, ListItemText, Typography} from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined.js";
import React from "react";

const Balances = () => {

    const accounts = [
        { name: 'Current Account', balance: 0 },
        { name: 'Savings Account', balance: 0 },
        { name: 'Investment Account', balance: 0 },
    ];

    return ( <Item sx={{ pb: 3, pt: 2, pl: 2 }} elevation={0}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, ml: 2 }}>
            <AccountBalanceWalletOutlinedIcon sx={{ verticalAlign: 'middle' }} /> &nbsp;Total Balance
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600, ml: 2, mt: 1 }}>
            £0.00
        </Typography>
        <Divider sx={{ mt: 2 }} />
        <Typography variant="subtitle2" sx={{ p: 2, fontWeight: 600 }}>Your Accounts</Typography>
        <List sx={{ marginLeft: 2 }}>
            {accounts.map((account) => (
                <ListItem key={account.name} disablePadding>
                    <ListItemText primary={account.name} />
                    <ListItemSecondaryAction>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>£{account.balance.toFixed(2)}</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    </Item>
    )
}
export default Balances
