import { Filtrar } from './Filtrar'
import CardEstudiante from './CardEstudiante'
import { useState, useEffect } from 'react'

const BuscarEstudiantes = (props) => {
  const [estudiantes, setEstudiantes] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')
  const asignatura_id = props.asignatura_id;


/*Este metodo me permite consumir el microservicio el cual me retorna 
una lista de estudiantes globales la cual los estudiantes aun no estan
inscritos a la asignatura la cual fue selecionada. */
  useEffect(() => {
    const getEstudiantes = async () => {
      try {
        const response = await fetch('http://localhost:2101/estudiantesglobales');
        const data = await response.json();
        setEstudiantes(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
  
    getEstudiantes();
  }, []);

  /* Con este metodo lo que realizo es filtrar los estudiantes 
  cuyo nombre sea igual al ingresado por el input sin importar
  si es mayusculas o minusculas. */
  const estudiantesFiltrados = estudiantes.filter((estudiante) =>
  estudiante.nombre.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className='container-buscar'>
      {/* form filtrar */}
      <Filtrar filter={filter} setFilter={setFilter} />
      {/* form filtrar */}

      {/* section estudiantes, en esta parte ya con el estudiante o estudiantes que 
      se vayan filtando los vamos a ir mostrando y para ello los datos son enviados
      a la funcion cardEstudiante la cual nos ermite visualizar un estudiante en una tarjeta, 
      con las caracteristcas previamente establecidas.*/}
      <section className='card-container-busqueda'>
        {loading ? (
          <p>Cargando...</p>
        ) : filter === '' ? null : estudiantesFiltrados.length > 0 ? (
          estudiantesFiltrados.map((estudiante) => (
            <CardEstudiante
              estudiante_id={estudiante.estudiante_id}
              nombre={estudiante.nombre}
              usuario={estudiante.usuario}
              foto={estudiante.foto}
              asignatura_id={asignatura_id}
              isEliminar={false}
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



