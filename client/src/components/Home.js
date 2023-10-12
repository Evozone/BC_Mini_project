// React
import React from 'react';
import axios from 'axios';
// MUI components
import Box from '@mui/material/Box';

// Custom components
import Wrapper from './Wrapper';
import Hero from './home/Hero';
import LeftSide from './home/left side/LeftSide';
import RightSide from './home/right side/RightSide';

// Home page where users can upload images and view their images
export default function Home({ contract, account }) {
    const handleRequest = async (file) => {
        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file);

                const resFile = await axios({
                    method: 'post',
                    url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
                    data: formData,
                    headers: {
                        pinata_api_key: `c889d988cf3aeb6ed255`,
                        pinata_secret_api_key: `deef0a21c6fb45a8c848e77a5651590a6803ee8c07795c455a1023a6a1d245f5`,
                        'Content-Type': 'multipart/form-data',
                    },
                });
                const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
                contract.add(account, ImgHash);
                alert('Successfully Image Uploaded');
            } catch (e) {
                alert('Unable to upload image to Pinata');
            }
        }
    };

    return (
        <Wrapper>
            <Hero />

            {/* Wrapper box for left and right side */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '2.2fr 0.8fr',
                }}
            >
                {/* Left side */}
                <LeftSide
                    handleRequest={handleRequest}
                    contract={contract}
                    account={account}
                />

                {/* Right side */}
                <RightSide />
            </Box>
        </Wrapper>
    );
}
