// React
import React from 'react';
import PropTypes from 'prop-types';

// MUI
import { Box } from '@mui/material';

// This component is used to create a layout for a route.
const Wrapper = ({ children }) => {
    return (
        <Box
            sx={{
                minHeight: '100vh', // Minimum height of the viewport
                width: '100vw', // Width of the viewport
                backgroundImage: `url('background.svg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Box
                sx={{
                    minHeight: '100vh', // Minimum height of the viewport
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
