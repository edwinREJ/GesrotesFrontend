import React, { useEffect, useState } from 'react';
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
import CardEstudianteTurno from './CardEstudiante';

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

export default function Calendario({selectedYear, selectedMonth, asignatura_id,setNumPages,setPage,page,filter}){

  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiantesId, setEstudiantesId] = useState([]);

  /*Filtro el estudiante que se desee buscar en el input*/
  const estudiantesFiltrados = estudiantes.filter((estudiante) =>
  estudiante.nombre && estudiante.nombre.toLowerCase().includes(filter.toLowerCase()));

  const estudiantesMemo = React.useMemo(() => {
    return (
      estudiantesFiltrados.map(estudiante => 
        (
          <CardEstudianteTurno
          key={estudiante.estudiante_id}
          nombre={estudiante.nombre}
          foto={estudiante.foto}
          />
        ))
    );
  }, [estudiantesFiltrados]);

  const columns = React.useMemo(() => createColumns(selectedYear, selectedMonth), [
    selectedYear,
    selectedMonth,
  ]);

  const rows = React.useMemo(() => {
    return createData(estudiantesMemo, selectedYear, selectedMonth);
  }, [selectedYear, selectedMonth, estudiantesMemo]);

  const itemsPerPage = 7;
  const numPages = Math.ceil(columns.length / itemsPerPage);
  
  setNumPages(numPages);

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [highlightedColumns, setHighlightedColumns] = React.useState([]);

  const handleColumnMouseEnter = (index) => {
    setHighlightedColumns([index]);
  };

  const handleColumnMouseLeave = () => {
    setHighlightedColumns([]);
  };


    /* Se utiliza el microservicio donde se le envia como parametro un codigo de 
      la asignatura y nos retorna una lista de ids de estudiantes que estan
      registrados a dicha asignatura */
  useEffect(() => {
    const obtenerEstudiantesId = async () => {
      try {
        const response = await fetch(`http://localhost:2008/ListarEstudiantes/${asignatura_id}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setEstudiantesId(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerEstudiantesId();
  }, [asignatura_id]); 

 

  /* Utilizo el microservicio donde se le envia como parametro una lista de ids de estudiantes 
      previamente obtenida y nos retorna los datos de los estudiantes los cuales estan registrados
      a dicha asignatura.*/
      useEffect(() => {
        const obtenerEstudiantes = async () => {
          try {
            const url = new URL('http://localhost:2101/estudiantesglobalesid');
            const params = new URLSearchParams();
            params.append('estudiantesId', estudiantesId.join(',')); // Convierte la lista en una cadena separada por comas
            url.search = params.toString();
    
            const response = await fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const data = await response.json();
            setEstudiantes(data);
           
          } catch (error) {
            console.log(error);
          }
        };
    
        obtenerEstudiantes();
      }, [estudiantesId]);

      
  return (
    <Paper sx={{ width: 'auto', backgroundColor: 'transparent' }}>
      <TableContainer sx={{ maxHeight: 'calc(100vh - 300px)', overflowX: 'hidden' }}>
        <Table stickyHeader aria-label="sticky table" sx={{ backgroundColor: 'transparent' }}>
          <TableHead>
            <TableRow sx={{ height: '3px' }}>
              <TableCell
                style={{
                  minWidth: '2vw',
                  left: 0,
                  zIndex: 1,
                  backgroundColor: '#F7F7F7',
                  paddingBottom:0,
                  marginBottom: '10px',
                  borderRight: '1px solid #000', //aqui se puede cambiar el color de fondo de la linea derecha
                }}
              >
                <div style={{borderBottom: '1px solid #000',width:'7vw'}}>
                  <div style={{ marginBottom: '1vh', marginLeft: '4vw',marginTop:'0vh' }}>
                    <span>Fecha</span>
                  </div>
                  <hr
                    style={{
                      borderBottom: '1px solid #000',
                      transform: 'rotate(35deg)',
                      width: '100%',
                      margin: 'auto',
                    }}
                  />
                  <div style={{ marginTop:'3vh', marginRight: '45px',marginBottom: '1vh'}}>
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
                          backgroundColor: highlightedColumns.includes(startIndex + columnIndex)
                            ? '#E3F2FD'
                            : '#F7F7F7',
                          // Agrega el borde derecho aquí
                          borderRight: '1px solid #000', //aqui se puede cambiar el color de fondo de la linea derecha
                          marginTop:'10vh',
                        }}
                        onMouseEnter={() => handleColumnMouseEnter(startIndex + columnIndex)}
                        onMouseLeave={handleColumnMouseLeave}
                        className="custom-header" 
                      >
                        {column.label}
                      
                      </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}  >
                <TableCell style={{ textAlign: 'center', width: '1vw',paddingBottom:0,
                paddingTop:0}}>{row.name}</TableCell>
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
      
    </Paper>
  );
}








