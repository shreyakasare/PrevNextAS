import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const MyDialog = ({ open, handleClose, selectedItem }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Item Details</DialogTitle>
      <DialogContent>
        <p>ID: {selectedItem.id}</p>
        <p>Name: {selectedItem.name}</p>
        {/* Add more details here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MyDialog;
