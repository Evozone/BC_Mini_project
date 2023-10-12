// React
import React from 'react'

// MUI components
import { Box, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Custom components
import Wrapper from './Wrapper';

// Home page where users can upload images and view their images
export default function Home() {
    return (
        <Wrapper>
            {/* Top frosted glass Box with rounded corners */}
            {/* Top frosted glass Box with rounded corners */}
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
            </Box>
            {/* Top frosted glass Box with rounded corners */}
            <Box
                sx={{
                    m: 1,
                    mt: 0,
                    p: 2,
                    backgroundColor: 'rgba(111, 111, 111, 0.3)',
                    backdropFilter: 'blur(20px)',
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
                        onClick={
                            () => { alert('Share') }
                        }
                    >
                        Manage Access
                    </Button>
                </Box>
            </Box>
        </Wrapper>
    )
}
