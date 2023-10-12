import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function ViewOthersImages({ contract }) {
    const [otherAddress, setOtherAddress] = useState('');
    const [data, setData] = useState([]);

    const getImages = async () => {
        if (!otherAddress.length < 1) {
            alert('Please enter an address');
            return;
        }
        if (!contract) {
            alert('Please connect to metamask');
            return;
        }
        let dataArray;
        try {
            dataArray = await contract.display(otherAddress);
        } catch (e) {
            alert("You don't have access");
        }
        const isEmpty = Object.keys(dataArray).length === 0;

        if (!isEmpty) {
            const str = dataArray.toString();
            const str_array = str.split(',');
            setData(str_array);
        } else {
            alert('No image to display');
        }
    };

    return (
        <Box
            sx={{ width: '100%', height: 500, overflowY: 'auto', pt: 2, pr: 2 }}
        >
            <TextField
                fullWidth
                id='outlined-basic'
                label='Enter other users address'
                variant='outlined'
                value={otherAddress}
                onChange={(e) => setOtherAddress(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        getImages();
                    }
                }}
            />
            <ImageList
                sx={{ width: 900, height: 450 }}
                cols={3}
                rowHeight={264}
            >
                {data.length > 0 &&
                    data.map((item, i) => (
                        <ImageListItem key={i}>
                            <img
                                src={item}
                                alt={item?.title}
                                loading='lazy'
                                onClick={() => {
                                    window.open(item, '_blank');
                                }}
                            />
                        </ImageListItem>
                    ))}
            </ImageList>
        </Box>
    );
}

export default ViewOthersImages;
