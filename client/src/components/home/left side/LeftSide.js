// React
import React, { useState } from 'react';

// MUI components
import { Box, Typography, Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ViewOwnImages from './ViewOwnImages';
import ViewOthersImages from './ViewOthersImages';

// Left side of home page where users can upload images
export default function LeftSide({ handleRequest, contract, account }) {
    const [imageFile, setImageFile] = useState(null);
    const [imgLocalURL, setImgLocalURL] = useState(null);
    const [uploadButtonDisabled, setUploadButtonDisabled] = useState(true);

    const handleImageInput = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const fileExt = file?.name.split('.').pop();
            if (
                fileExt === 'jpg' ||
                fileExt === 'jpeg' ||
                fileExt === 'png' ||
                fileExt === 'gif'
            ) {
                const localUrl = URL.createObjectURL(file);
                setImgLocalURL(localUrl);
                setImageFile(file);
                event.target.value = '';
                setUploadButtonDisabled(false);
            } else {
                alert(
                    'Please upload a valid image file of type jpg, jpeg, png or gif'
                );
            }
        }
    };

    const handleUploadImage = async () => {
        if (!imageFile) {
            alert(
                'Please upload a valid image file of type jpg, jpeg, png or gif'
            );
            return;
        }
        await handleRequest(imageFile);
        setImageFile(null);
        setUploadButtonDisabled(true);
        setImgLocalURL(null);
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role='tabpanel'
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
            </div>
        );
    }

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
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='basic tabs example'
                >
                    <Tab label='Upload Images' {...a11yProps(0)} />
                    <Tab label='View My Images' {...a11yProps(1)} />
                    <Tab label='View Others Images' {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 0,
                    }}
                >
                    {imgLocalURL ? (
                        <>
                            <CancelIcon
                                sx={{
                                    position: 'relative',
                                    top: 50,
                                    left: 270,
                                }}
                                cursor='pointer'
                                onClick={() => {
                                    setImageFile(null);
                                    setUploadButtonDisabled(true);
                                    setImgLocalURL(null);
                                    return;
                                }}
                            />
                            <img
                                style={{
                                    objectFit: 'contain',
                                    height: '100%',
                                    maxHeight: '400px',
                                    maxWidth: '600px',
                                    display: 'block',
                                    marginTop: '10px',
                                }}
                                alt='Failed to load :('
                                src={imgLocalURL}
                            />
                        </>
                    ) : (
                        <>
                            <input
                                accept='image/*'
                                id='sendImage'
                                type='file'
                                style={{ display: 'none' }}
                                onChange={handleImageInput}
                            />
                            <IconButton sx={{ mt: 2, pb: 0 }}>
                                <label htmlFor='sendImage'>
                                    <Tooltip title='Select an Image'>
                                        <AddPhotoAlternateIcon
                                            sx={{
                                                fontSize: '420px',
                                                cursor: 'pointer',
                                            }}
                                        />
                                    </Tooltip>
                                </label>
                            </IconButton>
                        </>
                    )}

                    <Button
                        sx={{
                            alignSelf: 'flex-end',
                            mt: 2,
                        }}
                        variant='contained'
                        startIcon={<CloudUploadIcon />}
                        onClick={handleUploadImage}
                        disabled={uploadButtonDisabled}
                    >
                        Upload
                    </Button>
                    {/* <Box
                        sx={{
                            alignSelf: 'flex-start',
                            mt: 2,
                        }}
                    > */}
                    <Typography
                        sx={{
                            alignSelf: 'flex-start',
                            color: 'text.secondary',
                        }}
                        variant='h6'
                    >
                        Your images are secured on blockchain
                        {/* <Button
                                variant='contained'
                                onClick={getImages}
                                sx={{
                                    alignSelf: 'flex-end',
                                    ml: 2,
                                }}
                            >
                                View my images
                            </Button> */}
                    </Typography>
                    {/* </Box> */}
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <ViewOwnImages contract={contract} account={account} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <ViewOthersImages />
            </CustomTabPanel>
        </Box>
    );
}
