// React
import React from 'react'

// MUI components
import { Box } from '@mui/material';

// Custom components
import Wrapper from './Wrapper';
import Hero from './home/Hero';
import LeftSide from './home/left side/LeftSide';
import RightSide from './home/right side/RightSide';

// Home page where users can upload images and view their images
export default function Home() {
    return (
        <Wrapper>
            <Hero />

            {/* Wrapper box for left and right side */}
            <Box
                sx={{
                    width: '100%',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                {/* Left side */}
                <LeftSide />

                {/* Right side */}
                <RightSide />
            </Box>
        </Wrapper >
    )
}
