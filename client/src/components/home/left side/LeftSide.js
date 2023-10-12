// React
import React from 'react'

// MUI components
import { Box, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Left side of home page where users can upload images
export default function LeftSide() {
    return (
        <Box
            sx={{
                ml: 1,
                mr: 1,
                mb: 1,
                p: 2,
                backgroundColor: 'rgba(111, 111, 111, 0.3)',
                backdropFilter: 'blur(20px)',
                borderRadius: '0 0 10px 10px',
                flexGrow: 4,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '20px',
                }}
            >
                <Typography variant="h6">Upload Images</Typography>
                <Button
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    onClick={() => {
                        // Handle upload logic
                    }}
                >
                    Upload
                </Button>
            </Box>
        </Box>
    )
}
