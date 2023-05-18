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
      .catch(error => {
        // Manejar errores
        console.error('Error:', error);
      });
      dispatch(cambiarEstado());
  };

  return (
    <div className='eliminar-todo'>
      <Button  onClick={eliminar}>Eliminar Todo</Button>
    </div>
  );
}

export default EliminarTodo;
