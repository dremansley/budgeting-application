import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange, purple } from '@mui/material/colors';

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
            contrastText: '#218c74',
        },
        secondary: {
            main: '#FFFFFF',
            contrastText: '#ffffff',
        },
        text: {
            primary: '#333333',
            secondary: '#666666',
            disabled: '#999999',
        },
    },
    props: {
        MuiTooltip: {
            arrow: true,
        },
        MuiAppBar: {
            color: 'white',
        },
    },
    shape: {
        borderRadius: 4,
    },
    borderColor:"#ccc",
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1A2027',
            contrastText: '#ffffff',
            light: 'rgba(0,0,0,0)',
            dark: 'rgba(0,0,0,0)',
        },
        secondary: {
            main: '#f3ba31',
        },
        text: {
            hint: 'rgba(0,0,0,0.38)',
        },
    },
    props: {
        MuiTooltip: {
            arrow: true,
        },
        MuiAppBar: {
            color: 'transparent',
        },
    },
    shape: {
        borderRadius: 4,
    },
    borderColor:'#333',
    secondBg:"#2d2d2d"
});
export  {lightTheme, darkTheme}
