import React from "react";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip} from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
const Sidebar = (props)=>{
    const theme = useTheme();

    return (
        <Box sx={{width:"fit-content",height:"100vh", background:theme.secondBg, display:"flex"}}>
        <List disablePadding sx={{display:"flex", flexDirection:"column"}}>
        {['Dashboard', 'Transactions', 'Theme'].map((text, index) => (
            <Tooltip title={text} placement={"left"} arrow><ListItem key={"text"} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        alignSelf: text === "Theme" ? "flex-end" : "flex-start"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: 0,
                            justifyContent: 'center',
                        }}
                    >
                        {text === "Dashboard" && <DashboardIcon/>}
                        {text === "Transactions" && <ReceiptIcon/>}
                        {text === "Theme" ? props.theme.palette.mode === "light" ? <DarkModeIcon sx={{alignSelf:"flex-end"}} onClick={()=>props.changeTheme(true)}/> : <LightModeIcon onClick={()=>props.changeTheme(false)}/> : <></>}

                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
            </Tooltip>
                ))}
            </List>
        </Box>
            )
}
export default Sidebar