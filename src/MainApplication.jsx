import React, {useState} from "react";
import {darkTheme, lightTheme} from "./utils/theme.js";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Components/Header.jsx";
import Subscriptions from "./Components/Subscriptions.jsx";
import {Box, Grid} from "@mui/material";
import NetWorth from './components/NetWorth';
import Balances from "./Components/Balances.jsx";
import RecentTransactionsTable from "./Components/RecentTransactionsTable.jsx";
import Statistics from "./Components/Statistics.jsx";

const MainApplication = () => {

    const [theme] = useState(lightTheme);

    return (<div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>
                <Box sx={{display: "flex"}}>
                    <Box sx={{flexGrow: 1, padding: 2}}>
                        <Grid container spacing={3} xs={12}>

                            <Grid item xs={3} sx={{padding: 0}} spacing={3}>
                                <NetWorth/>
                                <Balances/>
                                <Subscriptions/>
                            </Grid>

                            <Grid item xs={12} md={9}>
                                <Statistics />
                                <RecentTransactionsTable/>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    )
}
export default MainApplication;
