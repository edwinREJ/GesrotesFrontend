import { Filtrar } from './Filtrar'
import CardEstudiante from './CardEstudiante'
import { useState, useEffect } from 'react'
import { useSelector} from 'react-redux';

const BuscarEstudiantes = (props) => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiantesRegistrados, setEstudiantesRegistrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const asignatura_id = props.asignatura_id;
  const estado = useSelector(state => state.estado);

  useEffect(() => {
    const obtenerEstudiantesRegistrados = async () => {
      try {
        const response = await fetch(`http://localhost:2008/ListarEstudiantes/${asignatura_id}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
        setEstudiantesRegistrados(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerEstudiantesRegistrados();
  }, [asignatura_id,estado]); 


  useEffect(() => {
    const getEstudiantes = async () => {
      try {
        const response = await fetch('http://localhost:2101/estudiantesglobales');
        const data = await response.json();
        // Filtrar estudiantes y excluir los registrados
        setEstudiantes(data.filter(estudiante => !estudiantesRegistrados.includes(estudiante.estudiante_id)));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getEstudiantes();
  }, [filter,estudiantesRegistrados]);

  const estudiantesFiltrados = estudiantes.filter((estudiante) =>
  estudiante.nombre.toLowerCase().includes(filter.toLowerCase()) 
);


  return (
    <div className='container-buscar'>
      <Filtrar filter={filter} setFilter={setFilter} />

      <section className='card-container-busqueda'>
        {loading ? (
          <p>Cargando...</p>
        ) : filter === '' ? null : estudiantesFiltrados.length > 0 ? (
          estudiantesFiltrados.map((estudiante) => (
            <CardEstudiante
              key={estudiante.estudiante_id}
              estudiante_id={estudiante.estudiante_id}
              nombre={estudiante.nombre}
              usuario={estudiante.usuario}
              foto={estudiante.foto}
              asignatura_id={asignatura_id}
            />
          ))
        ) : (
          <p>No se encontró la búsqueda</p>
        )}
      </section>
    </div>
  );
};

export default BuscarEstudiantes;




