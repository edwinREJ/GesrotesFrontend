import CardEstudiante from './CardEstudiante';
import React, { useEffect, useState } from 'react';

const EstudiantesRegistrados = (props) => {
  const [estudiantesId, setIdEstudiantes] = useState([]);
  const asignatura_id = props.asignatura_id;

  useEffect(() => {
    const getPersonajes = async () => {
      try {
        const response = await fetch(`http://localhost:2008/ListarEstudiantes/${asignatura_id}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setIdEstudiantes(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    getPersonajes();
  }, [asignatura_id]);
  

  return (
    <div className="card-container">
    
    </div>
  );
};

export default EstudiantesRegistrados;




 