import Item from "./Item.jsx";
import {Box, Grid, Paper, Select, Typography} from "@mui/material";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined.js";
import MenuItem from "@mui/material/MenuItem";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import React, {useState} from "react";
import {getRandomColors} from "../utils/getRandomColors.jsx";

const Statistics = () =>{

    const [timeInterval, setTimeInterval] = useState('month');

    const handleTimeIntervalChange = (event) => {
        setTimeInterval(event.target.value);
    };

    const incomeChange = 3.55;
    const COLORS = getRandomColors(4);

    const chartData = [{month: "January 2023", income: 4662.95, expense: 3578.71}, {
        month: "February 2023",
        income: 4428.9,
        expense: 1010.87
    }, {month: "March 2023", income: 4230.92, expense: 3847.13}, {
        month: "April 2023",
        income: 2065.73,
        expense: 3164.18
    }, {month: "May 2023", income: 3237.49, expense: 2601.22}, {
        month: "June 2023",
        income: 4920.75,
        expense: 2110.54
    }, {month: "July 2023", income: 4336.46, expense: 3146.74}, {
        month: "August 2023",
        income: 3148.36,
        expense: 3060.91
    }, {month: "September 2023", income: 4537.76, expense: 2847.42}, {
        month: "October 2023",
        income: 4721.37,
        expense: 4096.11
    }, {month: "November 2023", income: 3603.59, expense: 1145.7}, {
        month: "December 2023",
        income: 4704.42,
        expense: 3138.38
    }]

    return (
        <Item sx={{height: "auto", p: 3}} elevation={0}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                }}
            >
                <Typography variant={"subtitle1"} sx={{fontWeight: 600}}>
                    <BarChartOutlinedIcon sx={{verticalAlign: "middle"}}/> &nbsp;
                    Monthly Breakdown
                </Typography>
                <Select
                    value={timeInterval}
                    onChange={handleTimeIntervalChange}
                    sx={{minWidth: 120}}
                    size={"small"}
                >
                    <MenuItem value="all">All Time</MenuItem>
                    <MenuItem value="today">Today</MenuItem>
                    <MenuItem value="week">Week</MenuItem>
                    <MenuItem value="month">Month</MenuItem>
                </Select>
            </Box>
            <Grid container spacing={2}>
                {["Total Income", "Total Expenses", "Total Savings", "Total Investments"].map((title, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper elevation={0} sx={{p: 2, borderRadius: 2}}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{fontWeight: 600, color: "grey"}}
                                >
                                    {title}
                                </Typography>
                                <Typography variant="h5" sx={{fontWeight: 600, mt: 1}}>
                                    {/*£{totalIncome || 0}*/}
                                    £0.00
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 600,
                                        color: incomeChange >= 0 ? "green" : "red",
                                    }}
                                >
                                    {incomeChange >= 0 ? "+" : ""}
                                    {incomeChange}% vs last month
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>))}
            </Grid>
            <Box sx={{mt: 3, display: "flex"}}>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={chartData}
                        margin={{top: 20, right: 30, left: 20, bottom: 5}}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="date"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="income" stackId="income" fill={COLORS[0]}/>
                        <Bar dataKey="expense" stackId="expenses" fill={COLORS[1]}/>
                        {/*<Line type="monotone" dataKey="income" stroke="#000" />*/}
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </Item>
    )
}

export default Statistics
