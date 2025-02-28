import React, { useState } from 'react';
import DataGrid from 'react-data-grid';

// Define columns for the grid
const columns = [
  { key: 'A', name: 'A' },
  { key: 'B', name: 'B' },
  { key: 'C', name: 'C' },
];

// Define initial rows for the grid
const initialRows = [
  { A: 1, B: 2, C: 3 },
  { A: 4, B: 5, C: 6 },
];

const Spreadsheet = () => {
  // State to manage the rows in the grid
  const [rows, setRows] = useState(initialRows);

  return (
    <DataGrid
      columns={columns} // Pass the columns
      rows={rows} // Pass the rows
      onRowsChange={(newRows) => setRows(newRows)} // Update rows when edited
      rowKeyGetter={(row) => row.id} // Unique key for each row
    />
  );
  
};


export default Spreadsheet;