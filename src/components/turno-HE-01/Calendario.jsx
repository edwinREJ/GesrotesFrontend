import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import CardTurno from './CardTurno';

dayjs.locale('es');

function createColumns(selectedYear, selectedMonth) {
  const daysInMonth = dayjs(`${selectedYear}-${selectedMonth}`).daysInMonth();
  const columns = [];

  let date = dayjs(`${selectedYear}-${selectedMonth}-01`);

  for (let day = 1; day <= daysInMonth; day++) {
    const dayName = date.format('dddd');

    columns.push({
      id: `${day}`,
      label: (
        <div>
          <div>{dayName}</div>
          <div>{day}</div>
        </div>
      ),
      minWidth: 80,
    });

    date = date.add(1, 'day');
  }

  while (columns.length % 7 !== 0) {
    const dayName = date.format('dddd');
    columns.push({
      id: date.format('YYYY-MM-DD'),
      label: (
        <div>
          <div>{dayName}</div>
          <div>{date.date()}</div>
        </div>
      ),
      empty: true,
      minWidth: 80,
    });
    date = date.add(1, 'day');
  }

  return columns;
}

function createData(estudiantes, selectedYear, selectedMonth) {
  const daysInMonth = dayjs(`${selectedYear}-${selectedMonth}`).daysInMonth();
  const rows = [];

  estudiantes.forEach((estudiante) => {
    const cards = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const date = dayjs(`${selectedYear}-${selectedMonth}-${day}`);
      cards.push(<CardTurno fecha={date.format('YYYY-MM-DD')} />);
    }

    const row = { name: estudiante, cards };
    rows.push(row);
  });

  return rows;
}

export default function StickyHeadTable({ selectedYear, selectedMonth }) {
  const estudiantes = React.useMemo(
    () => ['Estudiante 1', 'Estudiante 2', 'Estudiante 3', 'Estudiante 4', 'Estudiante 5'],
    []
  );

  const columns = React.useMemo(() => createColumns(selectedYear, selectedMonth), [
    selectedYear,
    selectedMonth,
  ]);

  const rows = React.useMemo(() => {
    return createData(estudiantes, selectedYear, selectedMonth);
  }, [selectedYear, selectedMonth, estudiantes]);

  const itemsPerPage = 7;
  const numPages = Math.ceil(columns.length / itemsPerPage);
  const [page, setPage] = React.useState(0);

  const handleNextPage = () => {
    setPage((prevPage) => (prevPage + 1) % numPages);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage - 1 + numPages) % numPages);
  };

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [highlightedColumns, setHighlightedColumns] = React.useState([]);

  const handleColumnMouseEnter = (index) => {
    setHighlightedColumns([index]);
  };

  const handleColumnMouseLeave = () => {
    setHighlightedColumns([]);
  };

  return (
    <Paper sx={{ width: 'auto', backgroundColor: 'transparent' }}>
      <TableContainer sx={{ maxHeight: 'calc(100vh - 300px)', overflowX: 'hidden' }}>
        <Table stickyHeader aria-label="sticky table" sx={{ backgroundColor: 'transparent' }}>
          <TableHead>
            <TableRow sx={{ height: '3px' }}>
              <TableCell
                style={{
                  minWidth: 100,
                  position: 'sticky',
                  left: 0,
                  zIndex: 1,
                  padding: '2vh',
                  backgroundColor: '#F7F7F7',
                }}
              >
                <div>
                  <div style={{ marginBottom: '8px', marginLeft: '4vw' }}>
                    <span>Fecha</span>
                  </div>
                  <hr
                    style={{
                      border: 'none',
                      borderTop: '1px solid #000',
                      transform: 'rotate(35deg)',
                      width: '100%',
                      margin: 'auto',
                    }}
                  />
                  <div style={{ marginTop: '8px', marginRight: '45px' }}>
                    <span>Estudiante</span>
                  </div>
                </div>
              </TableCell>
              {columns
                .slice(startIndex, endIndex)
                .map((column, columnIndex) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      textAlign: 'center',
                      position: 'sticky',
                      padding: '2vh',
                      backgroundColor: highlightedColumns.includes(startIndex + columnIndex)
                        ? '#E3F2FD'
                        : '#F7F7F7',
                    }}
                    onMouseEnter={() => handleColumnMouseEnter(startIndex + columnIndex)}
                    onMouseLeave={handleColumnMouseLeave}
                  >
                    {column.label}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                <TableCell style={{ textAlign: 'center', width: '1vw' }}>{row.name}</TableCell>
                {row.cards.slice(startIndex, endIndex).map((card, cardIndex) => {
                  const columnIndex = startIndex + cardIndex;
                  const isEmpty = columns[columnIndex].empty;

                  return (
                    <TableCell
                      key={cardIndex}
                      style={{
                        textAlign: 'center',
                        width: '0vw',
                        
                      }}
                    >
                      {isEmpty ? null : card}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button disabled={page === 0} onClick={handlePrevPage}>
          &lt; Anterior
        </button>
        <button disabled={page === numPages - 1} onClick={handleNextPage}>
          Siguiente &gt;
        </button>
      </div>
    </Paper>
  );
}








