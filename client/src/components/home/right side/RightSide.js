// React
import React from 'react';

// MUI components
import { Box } from '@mui/material';

// Custom components
import ShareButton from './ShareButton';

export default function RightSide() {
    return (
        <Box
            sx={{
                mr: 1,
                mb: 1,
                p: 2,
                backgroundColor: 'rgba(111, 111, 111, 0.3)',
                backdropFilter: 'blur(20px)',
                borderRadius: '0 0 10px 10px',
                flexGrow: 1,
                height: '78vh',
            }}
        >
            <ShareButton />
        </Box>
    );
}
