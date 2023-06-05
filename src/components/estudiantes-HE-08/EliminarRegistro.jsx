import { useDispatch } from 'react-redux';
import { cambiarEstado } from '../hooks/store';
import { Button } from 'react-bootstrap';

  function EliminarRegistro(props) {
    const dispatch = useDispatch();
  
    const eliminar = () => {
      const datos = {
        asignatura_id: props.asignatura_id,
        estudiante_id: props.estudiante_id
      };
    fetch('http://localhost:2008/EliminarEstudiante', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      })
      .then(response => {
        if (response.ok) {
          console.log('Estudiante eliminado exitosamente');
          dispatch(cambiarEstado());
        } else {
          console.error('Error al eliminar estudiante');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
    return (
      <div >
        <Button className='eliminar-registro'  onClick={eliminar}>Eliminar Registro</Button>
      </div>
    );
  }
  
  export default EliminarRegistro;