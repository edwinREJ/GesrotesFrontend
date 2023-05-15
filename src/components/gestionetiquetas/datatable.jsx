import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteButton from './buttondelete'
import PropTypes from 'prop-types';

function createData(etiqueta, hospital) {
  return { etiqueta, hospital };
}

function createRows(etiquetas) {
  if (etiquetas && etiquetas.length > 0) {
    return etiquetas.map((etiqueta) => createData(etiqueta.nombre, etiqueta.escenario));
  } else {
    return [];
  }
}


export default function DenseTable(props ) {

  const { etiquetas } = props;
  const rows = createRows(etiquetas);

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow >
            <TableCell align="center" className='DenseTable'>Etiqueta</TableCell>
            <TableCell align="center" className='DenseTable'>Hospital</TableCell>
            <TableCell align="center" className='DenseTable'>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.etiqueta}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" className='DenseTable'>{row.etiqueta}</TableCell>
              <TableCell align="center" className='DenseTable'>{row.hospital}</TableCell>
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



DenseTable.propTypes = {
  etiquetas: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      escenario: PropTypes.string.isRequired,
    })
  ).isRequired,
};