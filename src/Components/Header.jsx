import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import {useState} from "react";
import {Avatar, Button} from "@mui/material";
import {CloudUpload} from "@mui/icons-material";

export default function Header({setShowTransactionImporterModal}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [activeTab, setActiveTab] = useState("Dashboard");

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const theme = useTheme();

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue)
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <SettingsOutlinedIcon/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircleOutlinedIcon/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static"
                    sx={{boxShadow: "none", height: "55px", backgroundImage: "none", backgroundColor: '#FFF'}}>
                <Toolbar sx={{maxHeight: "55px", minHeight: "0 !important"}}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color={"#341f97"}
                        sx={{display: {xs: 'none', sm: 'block'}, fontWeight: "800"}}
                    >
                        Personal Finance
                    </Typography>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        textColor="primary.secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                        sx={{ml: 10, textTransform: "capitalize"}}
                    >
                        <Tab value="Dashboard" icon={<DashboardOutlinedIcon/>} iconPosition="start" label="Dashboard"/>
                        <Tab value="Transactions" icon={<ReceiptOutlinedIcon/>} iconPosition="start"
                             label="Transactions"/>
                    </Tabs>

                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>

                        <IconButton size="large" aria-label="show 4 new mails" color="secondary">
                            <SettingsOutlinedIcon/>
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="secondary"
                        >
                            <AccountCircleOutlinedIcon/>
                        </IconButton>

                    </Box>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="secondary"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </Box>

                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<CloudUpload/>}
                        component="span"
                        size={"small"}
                        sx={{color: "#341f97", borderColor:"#341f97", borderWidth: 1, fontWeight: 600, ml: 3}}
                        onClick={setShowTransactionImporterModal}
                    >
                        Import Transactions
                    </Button>

                    <Box button sx={{display:"flex", flexDirection:"row", gap:2, alignItems:"center", ml:4, mr:0, cursor:"pointer", py:1, px:2, borderRadius:2, '&:hover': {backgroundColor:"action.hover"}}}>
                        <Avatar src={"https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"} sx={{width:30, height:30}}/>
                    <Typography variant={"subtitle2"} color={"#333"} sx={{fontWeight:600}}>Andre Mansley</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
