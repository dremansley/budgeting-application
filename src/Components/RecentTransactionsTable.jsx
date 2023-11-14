import Item from "./Item.jsx";
import {Box, Typography} from "@mui/material";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined.js";
import {DataGrid} from "@mui/x-data-grid";
import {generateRandomId} from "../utils/generateRandomId.jsx";
import React from "react";

const RecentTransactionsTable = () => {

    const columns = [{
        field: 'Transaction Date', headerName: 'Transaction Date', editable: true, flex: 1
    }, {
        field: 'Sort Code', headerName: 'Sort Code', type: 'number', editable: true, flex: 1
    }, {
        field: 'Account Number',
        headerName: 'Account Number',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        flex: 1
    }, {
        field: 'Transaction Description',
        headerName: ' Transaction Description',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        flex: 1
    }, {
        field: 'Debit Amount',
        headerName: 'Debit Amount',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        cellClassName: (params) => {
            if (params.value !== '') {
                return 'green-cell';
            }
            return '';
        },
        flex: 1
    }, {
        field: 'Credit Amount',
        headerName: 'Credit Amount',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        cellClassName: (params) => {
            if (params.value !== '') {
                return 'red-cell';
            }
            return '';
        },
        flex: 1
    }, {
        field: 'Balance',
        headerName: 'Balance',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        flex: 1
    }];

    return (<Item sx={{mt: 2, pt: 2, pb: 2}} elevation={0}>
            <Typography variant={"subtitle1"} sx={{fontWeight: 600, ml: 2}}><ReceiptOutlinedIcon
                sx={{verticalAlign: 'middle'}}/> &nbsp;Recent Transactions</Typography>
            <Box sx={{width: '100%', p: 2}}>
                <DataGrid
                    rows={[]}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 20,
                            },
                        },
                    }}
                    autoHeight
                    getRowId={(row) => generateRandomId()}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    sx={{border: "none"}}
                />
            </Box>
        </Item>)
}
export default RecentTransactionsTable
