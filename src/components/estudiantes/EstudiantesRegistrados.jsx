import CardEstudiante from './CardEstudiante';
import React, { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';

const EstudiantesRegistrados = (props) => {
  //En esta parte me encargo de guardar los id de los estudiantes para luego consumir otro servicio 
  //donde le envio los id de los estudiantes y me retorna una lista de los estudiantes con su informacion completa.
  const [estudiantesId, setIdEstudiantes] = useState([]);
  const [estudiantes, setEstudiantes] = useState([]);
  const asignatura_id = props.asignatura_id;
  const estado = useSelector(state => state.estado); // Obtener el estado desde Redux
  
  useEffect(() => {
    const obtenerEstudiantesId = async () => {
      try {
        const response = await fetch(`http://localhost:2008/ListarEstudiantes/${asignatura_id}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setIdEstudiantes(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerEstudiantesId();
  }, [asignatura_id,estado]); 


  /* Este servicio es el que me permite enviarle la lista de id de estudiantes y 
  me retorna toda la informacion del estudiante. */
  useEffect(() => {
    const obtenerEstudiantes = async () => {
      try {
        const url = new URL('http://localhost:2101/estudiantesglobalesid');
        const params = new URLSearchParams();
        params.append('estudiantesId', estudiantesId.join(',')); // Convierte la lista en una cadena separada por comas
        url.search = params.toString();

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setEstudiantes(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerEstudiantes();
  }, [estudiantesId,estado]);

  console.log(estado);

  return (
    <div className="card-container">
      {estudiantes.length !== 0 &&
        estudiantes.map((estudiante) => (
          <CardEstudiante
            key={estudiante.estudiante_id}
            estudiante_id={estudiante.estudiante_id}
            asignatura_id={asignatura_id}
            foto={estudiante.foto}
            nombre={estudiante.nombre}
            usuario={estudiante.usuario}
            isEliminar={true}
          />
        ))}
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    estado: state.estado,
  };
};

export default connect(mapStateToProps)(EstudiantesRegistrados);







 