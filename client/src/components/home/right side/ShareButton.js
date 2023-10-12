// React
import React, { useState } from 'react'

// MUI components
import { Button } from '@mui/material';

// Custom components
import AccessDialog from './AccessDialog';

// Button to manage access to images
export default function ShareButton() {
    const [open, setOpen] = useState(false);
    const handleAccessDialog = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };
    return (
        <>
            <Button variant="contained" onClick={handleAccessDialog}>
                Manage Access
            </Button>
            <AccessDialog
                open={open}
                onClose={handleClose}
            />
        </>
    )
}
