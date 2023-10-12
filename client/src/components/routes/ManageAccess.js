// React
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// MUI components
import { Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Custom components
import RouteLayout from '../RouteLayout';

// ManageAccess page where users can manage access to their images
export default function ManageAccess() {
    return (
        <RouteLayout>
            <Box
                sx={{
                    m: 1,
                    p: 2,
                    backgroundColor: 'rgba(55, 55, 55, 0.3)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px 10px 0 0',
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
                <Typography variant="h4" gutterBottom fontFamily="Trebuchet MS, sans-serif">
                    Manage Access
                </Typography>
                <Typography variant="body1">
                    Manage access to your images and associated addresses.
                </Typography>
            </Box>
            <Box
                sx={{
                    m: 1,
                    mt: 0,
                    p: 2,
                    backgroundColor: 'rgba(55, 55, 55, 0.3)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '0 0 10px 10px',
                    flexGrow: 1,
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
                {/* Content for managing access */}
                {/* Add your content for managing access here */}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginTop: '20px',
                    }}
                >
                    <Button
                        variant="contained"
                        startIcon={<ArrowBackIcon />}
                        component={RouterLink}
                        to="/"
                    >
                        Back to Home
                    </Button>
                </Box>
            </Box>
        </RouteLayout>
    );
}
