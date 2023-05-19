import { useDispatch } from 'react-redux';
import { cambiarEstado } from '../hooks/store';
import {Button } from 'react-bootstrap';
import './styles.css'

  /* Este metodo nos permite consumir un microservicio el cual permite
  registrar un estudiante en la asignatura que previamente selecciono. */

  function RegistrarEstudiante(props) {

    const dispatch = useDispatch();
    
      const registrar = () => {
          /* Construyo el objeto a enviar*/
        const datos = {
          asignatura_id: props.asignatura_id,
          estudiante_id: props.estudiante_id
        };
      fetch('http://localhost:2008/RegistrarEstudiante', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(datos)
        })
        .then(response => {
          if (response.ok) {
            console.log('Estudiante registrado exitosamente');
            dispatch(cambiarEstado());
          } else {
            console.error('Error al registrar estudiante');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };
  
    return (
      <div >
        <Button className='registrar-estudiante' onClick={registrar}>Registrar</Button>
      </div>
    );
  }
  
  export default RegistrarEstudiante;  