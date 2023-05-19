import React from 'react';
import { useDispatch } from 'react-redux';
import { cambiarEstado } from '../hooks/store';
import { Button } from 'react-bootstrap';

function EliminarTodo({ asignatura_id }) {
  const dispatch = useDispatch();

  const eliminar = () => {
    fetch(`http://localhost:2008/EliminarEstudiantes/${asignatura_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          console.log('Estudiantes eliminados exitosamente');
          dispatch(cambiarEstado());
        } else {
          console.error('Error al eliminar estudiantes');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='eliminar-todo'>
      <Button onClick={eliminar}>Eliminar Todo</Button>
    </div>
  );
}

export default EliminarTodo;

