import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filter({ onFilterChange }) {
  const [filter, setFilter] = useState('Show all');

  const handleChange = e => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <Box sx={{ width: 160 }}>
      <FormControl fullWidth>
        <InputLabel>Filter</InputLabel>
        <Select value={filter} label="Filter" onChange={handleChange}>
          <MenuItem value={'Show all'}>Show All</MenuItem>
          <MenuItem value={'Follow'}>Follow</MenuItem>
          <MenuItem value={'Followings'}>Followings</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
