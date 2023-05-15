import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteButton from './buttondelete'
import PropTypes from 'prop-types';

function createData(etiqueta, servicio) {
  return { etiqueta, servicio};
}

function createRows(data) {
  if (data && data.length > 0) {
    return data.map((data) => createData(data.etiqueta, data.servicio));
  } else {
    return [];
  }
}

export default function DenseTableAsociar(props) {

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
              key={row.data}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" className='DenseTable'>{row.etiqueta}</TableCell>
              <TableCell align="center" className='DenseTable'>{row.servicio}</TableCell>
              <TableCell align="center" className='DenseTable'>{'San jose'}</TableCell>
              <TableCell align="center">
               <DeleteButton   className='delete'/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

DenseTableAsociar.propTypes = {
  etiquetas: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      escenario: PropTypes.string.isRequired,
    })
  ).isRequired,
};