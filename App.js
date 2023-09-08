import './App.css';
import CycleThrough from './Components/CycleThrough';
import React, { useState } from 'react';
import MyDialog  from './Components/MyDialog'
import MyTable from './Components/MyTable';

const App = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedItem(null);
    setDialogOpen(false);
  };

  // Your data
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    // Add more items
  ];

  return (
    <div>
     {/* <CycleThrough/> */}

      <MyTable data={data} handleOpenDialog={handleOpenDialog} />
      <MyDialog open={isDialogOpen} handleClose={handleCloseDialog} selectedItem={selectedItem} />
    </div>
  );
};

export default App;
