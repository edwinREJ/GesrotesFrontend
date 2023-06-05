import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import EliminarAsociacion from './EliminarAsociacion';

function createData(nombre, servicio,centrosalud_nombre,etiqueta_id) {
  return { nombre, servicio,centrosalud_nombre,etiqueta_id};
}

function createRows(data) {
  if (data && data.length > 0) {
    return data.map((data) => createData(data.nombre, data.servicio, data.centrosalud_nombre,data.etiqueta_id));
  } else {
    return [];
  }
}

export default function TablaAsociaciones(props) {

  const { data } = props;
  const rows = createRows(data);

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow >
            <TableCell align="center" className='DenseTable'>Etiqueta</TableCell>
            <TableCell align="center" className='DenseTable'>Servicio</TableCell>
            <TableCell align="center" className='DenseTable'>Hospital</TableCell>
            <TableCell align="center" className='DenseTable'>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.etiqueta_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" className='DenseTable'>{row.nombre}</TableCell>
              <TableCell align="center" className='DenseTable'>{row.servicio}</TableCell>
              <TableCell align="center" className='DenseTable'>{row.centrosalud_nombre}</TableCell>
              <TableCell align="center">
              <EliminarAsociacion className='delete' etiqueta_id={row.etiqueta_id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

