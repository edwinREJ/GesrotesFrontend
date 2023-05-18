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
        .catch(error => {
          console.log(error);
        });
      dispatch(cambiarEstado());
    };
  
    return (
      <div >
        <Button className='eliminar-registro'  onClick={eliminar}>Eliminar Registro</Button>
      </div>
    );
  }
  
  export default EliminarRegistro;