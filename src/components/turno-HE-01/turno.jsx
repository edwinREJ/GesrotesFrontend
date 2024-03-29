import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchAppBar from "./navbar_turno"
import Calendario from "./Calendario"

function Turno({asignatura_id}) {

  /* Fecha que se mostrara en la tabla turno por defecto. */
  const [selectedMonth, setSelectedMonth] = useState('1');
  const [selectedYear, setSelectedYear] = useState('2023');
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = React.useState(0);
  const [filter, setFilter] = useState('');

  return (
    <Box sx={{ display: 'grid' }}>
      <Box sx={{ height: '8vh', background: '#F7F7F7' }}>
        <SearchAppBar setSelectedMonth={setSelectedMonth} setSelectedYear={setSelectedYear} 
          page={page} numPages={numPages} setPage={setPage} setFilter={setFilter}
        />
      </Box>
      <Box sx={{  height: '55vh', background: '#F7F7F7',marginTop:'3vh' }}>
        <Calendario selectedMonth={selectedMonth} selectedYear={selectedYear} 
        asignatura_id={asignatura_id} setNumPages={setNumPages} page={page} setPage={setPage}
        filter={filter}
        />
      </Box>
    </Box>
  );
}

export default Turno;
