import { Filtrar } from './Filtrar'
import CardEstudiante from './CardEstudiante'
import { useState, useEffect } from 'react'

const BuscarEstudiantes = (props) => {
  const [estudiantes, setEstudiantes] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')
  const asignatura_id = props.asignatura_id;

  useEffect(() => {
    const getPersonajes = async () => {
      try {
        const response = await fetch('http://localhost:2101/estudiantesglobales');
        const data = await response.json();
        setEstudiantes(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
  
    getPersonajes();
  }, []);

  const personajesFiltrados = estudiantes.filter((personaje) =>
    personaje.nombre.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className='container-buscar'>
      {/* form filtrar */}
      <Filtrar filter={filter} setFilter={setFilter} />
      {/* form filtrar */}

      {/* section estudiantes */}
      <section className='card-container-busqueda'>
        {loading ? (
          <p>Cargando...</p>
        ) : filter === '' ? null : personajesFiltrados.length > 0 ? (
          personajesFiltrados.map((personaje) => (
            <CardEstudiante
              estudiante_id={personaje.estudiante_id}
              nombre={personaje.nombre}
              usuario={personaje.usuario}
              foto={personaje.foto}
              asignatura_id={asignatura_id}
              isEliminar={false}
            />
          ))
        ) : (
          <p>No se encontró la búsqueda</p>
        )}
      </section>
      {/* section estudiantes */}
    </div>
  );
};

export default BuscarEstudiantes;



