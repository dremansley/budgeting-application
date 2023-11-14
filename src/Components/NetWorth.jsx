import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NetWorth = () => {
    const assets = [
        { name: 'Bank Account', value: 0 },
        { name: 'Stocks', value: 0 },
    ];

    const liabilities = [
        { name: 'Credit Card Debt', value: 0 },
        { name: 'Student Loan', value: 0 },
    ];

    const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
    const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.value, 0);

    const netWorth = (totalAssets - totalLiabilities).toFixed(2);

    return (
        <Box sx={{ pb: 3, pl: 0}}>
            <Paper elevation={0} sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, ml: 1, mb:2, color: "#341f97" }}>
                    Your Net Worth
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 600, mt: 1, ml:1 }}>
                    £{netWorth}
                </Typography>

            <Accordion sx={{ boxShadow: 'none', mt: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Detailed Breakdown
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ width: '100%' }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            Assets
                        </Typography>
                        <List>
                            {assets.map((asset, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={asset.name} />
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                        £{asset.value}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            Liabilities
                        </Typography>
                        <List>
                            {liabilities.map((liability, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={liability.name} />
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                        £{liability.value}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </AccordionDetails>
            </Accordion>
            </Paper>
        </Box>
    );
};

export default NetWorth;
