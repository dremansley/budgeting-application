import {
    Box,
    Button,
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    InputLabel,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField, Tooltip,
    Typography
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined.js";
import React, {useState} from "react";
import Item from "./Item.jsx"
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from "@mui/material/Menu";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Subscriptions = () => {

    const [subscriptions, setSubscriptions] = useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [newSubscriptionOpen, setNewSubscriptionOpen] = useState(false);
    const [date, setDate] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickOpen = () => {
        setNewSubscriptionOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        console.log("You deleted a subscription");
    }
    const handleEdit = () => {
        console.log("You are editing a subscription")
    }

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
            <Item sx={{height: 'auto', mt: 2}} elevation={0}>
                <Box
                    sx={{display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>
                    <Typography variant="subtitle1" sx={{fontWeight: 600, p: 1, pb: 1}}>Subscriptions</Typography>
                    <Box>
                        <IconButton>
                            <SettingsOutlinedIcon/>
                        </IconButton>
                        <Tooltip title={"Add New Subscription"}><IconButton variant="none" color="inherit" onClick={handleClickOpen}>
                            <AddOutlinedIcon/>
                        </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                <Box sx={{p: 1, backgroundColor: "#f8f8f8", borderRadius: 1, m: 1}}>
                    <Table size="small" aria-label="subscription breakdown" sx={{border: "none"}}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{
                                    textAlign: "center",
                                    fontWeight: 700,
                                    borderBottom: "none",
                                    p: 0
                                }}>Count</TableCell>
                                <TableCell sx={{
                                    textAlign: "center",
                                    fontWeight: 700,
                                    borderBottom: "none",
                                    p: 0
                                }}>Total</TableCell>
                                <TableCell sx={{textAlign: "center", fontWeight: 700, borderBottom: "none", p: 0}}>% of
                                    Income</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{
                                    textAlign: "center",
                                    borderBottom: "none",
                                    p: 0
                                }}>{subscriptions.length}</TableCell>
                                <TableCell sx={{textAlign: "center", borderBottom: "none", p: 0}}>
                                    £{subscriptions.reduce((acc, sub) => acc + parseFloat(sub.cost), 0)}
                                </TableCell>
                                <TableCell sx={{textAlign: "center", borderBottom: "none", p: 0, color: "#222"}}>
                                    {(
                                        (subscriptions.reduce((acc, sub) => acc + parseFloat(sub.cost), 0) /
                                            2200) *
                                        100
                                    ).toFixed(2)}
                                    %
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
                {/*<Box sx={{mb: 0, mt: 2, display:"flex", flexDirection:"column"}}>*/}
                {/*    <Typography variant={"caption"} sx={{pl:1}}>Congratulations! You're <b>6.43%</b> under budget</Typography>*/}
                {/*    <Typography variant={"caption"} sx={{pl:1}}>Consider saving an*/}
                {/*        extra <b>£{(6.43 * 2200) / 100}</b></Typography>*/}
                {/*</Box>*/}

                {subscriptions.length ? subscriptions
                        .sort((a, b) => a.payment_date - b.payment_date)
                        .map((subscription) => (
                            <Card variant="none">
                                <CardContent sx={{padding: 2, pr: 0, pb: "5px !important"}}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12} sm={6}>
                                            <Typography
                                                variant="subtitle1"
                                                component="h2"
                                                sx={{
                                                    fontWeight: 600,
                                                    paddingBottom: 0,
                                                }}
                                            >
                                                {subscription.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {subscription.payment_date}th Monthly
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    height: '100%',
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <Typography
                                                    variant="subtitle1"
                                                    component="p"
                                                    sx={{
                                                        fontWeight: 600,
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    £{subscription.cost}
                                                </Typography>
                                                <IconButton
                                                    aria-label="more"
                                                    aria-controls="long-menu"
                                                    aria-haspopup="true"
                                                    onClick={handleClick}
                                                >
                                                    <MoreVertIcon/>
                                                </IconButton>
                                                <Menu
                                                    id="long-menu"
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                    MenuListProps={{
                                                        'aria-labelledby': 'basic-button',
                                                    }}
                                                    sx={{boxShadow: 0}}
                                                >
                                                    <MenuItem onClick={handleEdit}>Edit</MenuItem>
                                                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                                                </Menu>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        )) :
                    <Typography variant={"body2"}
                                sx={{fontWeight: 600, textAlign: "center", color: "grey", pt: 3, pb: 3}}>No
                        Subscriptions Found</Typography>}
            </Item>

            <Dialog open={newSubscriptionOpen} onClose={handleClose}>
                <DialogTitle>Add Subscription</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Subscription Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="amount"
                        label="Amount"
                        type="number"
                        fullWidth
                    />
                    <FormControl fullWidth>
                        <InputLabel>Date of Month</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={date}
                            label="Date of Month"
                            onChange={handleChange}
                        >
                            {[...Array(31)].map((_, i) => (
                                <MenuItem key={i + 1} value={i + 1}>
                                    {i + 1}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Subscriptions;
