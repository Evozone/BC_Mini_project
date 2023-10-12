import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function ViewOwnImages({ contract, account }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            let dataArray;
            try {
                dataArray = await contract.display(account);
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
        contract && getImages();
    }, [contract, account]);

    return (
        <Box sx={{ width: '100%', height: 500, overflowY: 'auto' }}>
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

export default ViewOwnImages;
