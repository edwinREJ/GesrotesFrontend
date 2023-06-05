import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { cambiarEstado } from '../hooks/store';

function EliminarEtiqueta(props) {
  
  const dispatch = useDispatch();
  const etiqueta_id = props.etiqueta_id;  

  const eliminar = () => {
  
  fetch(`http://localhost:2006/Etiquetas/${etiqueta_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        console.log('Etiqueta eliminado exitosamente');
        dispatch(cambiarEstado());
      } else {
        console.error('Error al eliminar etiqueta');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

  return (
    <div >
      <Button className="delete-button" onClick={eliminar}>
        <img src={process.env.PUBLIC_URL + "/eliminar.png"} alt="Eliminar" />
      </Button>
    </div>
  );
}

export default EliminarEtiqueta;