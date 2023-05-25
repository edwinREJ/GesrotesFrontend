import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { cambiarEstado } from '../hooks/store';

function EliminarAsociacion(props) {
  
  const dispatch = useDispatch();
  const etiqueta_id = props.etiqueta_id;  

  const eliminar = () => {
  
  fetch(`http://localhost:2006/Etiqueta/${etiqueta_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        console.log('Asociacion eliminada exitosamente');
        dispatch(cambiarEstado());
      } else {
        console.error('Error al eliminar asociacion');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

  return (
    <div >
      <Button className="delete-button" onClick={eliminar}>
      <img src={"eliminar.png"} alt="Eliminar" /></Button>
    </div>
  );
}

export default EliminarAsociacion;