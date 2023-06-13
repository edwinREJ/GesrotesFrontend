import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchAppBar from "./navbar_turno"
import Calendario from "./Calendario"

function Turno() {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  return (
    <Box sx={{ display: 'grid' }}>
      <Box sx={{ height: '8vh', background: '#F7F7F7' }}>
        <SearchAppBar setSelectedMonth={setSelectedMonth} setSelectedYear={setSelectedYear} />
      </Box>
      <Box sx={{ overflowY: 'auto', height: '55vh', background: '#F7F7F7',marginTop:'3vh' }}>
      <Calendario selectedMonth={selectedMonth} selectedYear={selectedYear} />
      </Box>
    </Box>
  );
}

export default Turno;
