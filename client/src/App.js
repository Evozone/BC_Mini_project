// React imports
import React, { useState, useEffect } from 'react';

// Material UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Components
import Home from './components/Home';

function App() {

    const navigate = useNavigate();

    const localTheme = window.localStorage.getItem('dAppTheme');

    const [mode, setMode] = useState(localTheme ? localTheme : 'light');

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },

        typography: {
            fontFamily: "'Open Sans', sans-serif",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Home />
        </ThemeProvider>
    );
}

export default App;
