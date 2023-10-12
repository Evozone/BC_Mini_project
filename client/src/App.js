// React imports
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Material UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Components
import Home from './components/routes/Home';
import ManageAccess from './components/routes/ManageAccess';

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
            {/* Routes for the blockchain project. */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/access' element={<ManageAccess />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
