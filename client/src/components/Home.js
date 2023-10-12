// React
import React from 'react'
import { useNavigate } from 'react-router-dom';

// MUI components
import { Box, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Custom components
import RouteLayout from './Wrapper';

// Home page where users can upload images and view their images
export default function Home() {
    const navigate = useNavigate();

    return (
        <Wrapper>
            {/* Top frosted glass Box with rounded corners */}
            {/* Top frosted glass Box with rounded corners */}
            <Box
                sx={{
                    m: 1,
                    p: 2,
                    backgroundColor: 'rgba(55, 55, 55, 0.3)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px 10px 0 0',
                }}
            >
                <Typography variant="h4" gutterBottom fontFamily="Trebuchet MS, sans-serif">
                    PixShare
                </Typography>
                <Typography variant="body1">
                    Discover, share, and explore images securely using blockchain and IPFS.
                </Typography>
            </Box>
            {/* Top frosted glass Box with rounded corners */}
            <Box
                sx={{
                    m: 1,
                    mt: 0,
                    p: 2,
                    backgroundColor: 'rgba(55, 55, 55, 0.3)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '0 0 10px 10px',
                    flexGrow: 1,
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

                {/* Share Button */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: '20px',
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate('/access');
                        }}
                    >
                        Manage Access
                    </Button>
                </Box>
            </Box>
        </Wrapper>
    )
}
