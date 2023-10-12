// React
import React from 'react'

// MUI components
import { Box, Typography } from '@mui/material';

export default function Hero() {
    return (
        <Box
            sx={{
                m: 1,
                p: 2,
                backgroundColor: 'rgba(111, 111, 111, 0.3)',
                backdropFilter: 'blur(20px)',
                borderRadius: '10px 10px 0 0',
            }}
        >
            <Typography variant="h4" gutterBottom fontFamily="Trebuchet MS, sans-serif"
                color="primary.main">
                PixShare
            </Typography>
            <Typography variant="body1" color="text.secondary" fontFamily="Trebuchet MS, sans-serif">
                Discover, share, and explore images securely using blockchain and IPFS.
            </Typography>
        </Box >
    );
}
