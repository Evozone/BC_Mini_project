// React
import React from 'react'

// MUI components
import {
    Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, Avatar, Stack, Button, TextField, IconButton
} from '@mui/material';

// MUI icons
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

export default function AccessDialog({ onClose, open }) {

    const addresses = ['0xbF3D45df411419aB0E1575739b6Ac95C20e525aF', '0x6A0eB0d8D7A6b2c9E2eE4d8A4D0A4f6C9eA5B0B9', '0x6A0eB0d8D7A6b2c9E2eE4d8A4D0A4f6C9eA5B0B9'];

    const handleClose = () => {
        onClose();
    };

    const removeAccount = () => {
        // Add logic to remove account
    }

    const addAccount = () => {
        // Add logic to add account
    }

    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md"
            sx={{
                '& .MuiDialog-paper': {
                    bgcolor: 'rgba(111, 111, 111, 0.3)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '10px',
                },
            }}
        >
            <DialogTitle>Your images are shared to</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>

            {/* Actual List of addresses */}
            <List sx={{ pt: 0 }}>
                {addresses.map((address) => (
                    <ListItem key={address}>
                        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" width="100%">
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: 'primary.main' }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={address} />
                            {/* Button to remove user */}
                            <Button variant="contained" color="error"
                                sx={{ textTransform: 'none' }}
                                onClick={removeAccount}
                            >
                                Revoke access &nbsp;
                                <CloseIcon />
                            </Button>
                        </Stack>
                    </ListItem>
                ))}

                {/* Adding new address */}
                <ListItem>
                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" width="100%">
                        {/* Input */}
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Add new Address"
                            variant="outlined"
                            size="small"
                        />
                        {/* Button */}
                        <Button variant="contained" color="success" sx={{ textTransform: 'none' }}
                            onClick={addAccount}
                        >
                            Add
                            <AddIcon />
                        </Button>
                    </Stack>
                </ListItem>
            </List>

        </Dialog >
    )
}
