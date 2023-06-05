import Modal from 'react-bootstrap/Modal';
import './StylesGestionEstudiante.css'
import { Box } from '@mui/material'
import GrupoBoton from './GrupoBoton'
import Button from '@mui/material/Button';
import './StylesGestionEstudiante.css';
import React, { useEffect, useState } from 'react';


function GestionEstudiante(props) {

  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiantesId, setEstudiantesId] = useState([]);
  const [filter, setFilter] = useState('');
  const asignatura_id = 1;

  /* Si el boton seleccionado es todos boton selecionado es igual a cero
     Si el boton seleccionado es seleccionados boton selecionado es igual a uno
     Si el boton seleccionado es no_seleccionados boton selecionado es igual a dos*/
  const [botonSeleccionado, setBotonSeleccionado] = useState(0);



  /* Se utiliza el microservicio donde se le envia como parametro un codigo de 
      la asignatura y nos retorna una lista de ids de estudiantes que estan
      registrados a dicha asignatura */

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
        setEstudiantesId(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerEstudiantesId();
  }, [asignatura_id]); 


  /* Utilizo el microservicio donde se le envia como parametro una lista de ids de estudiantes 
      previamente obtenida y nos retorna los datos de los estudiantes los cuales estan registrados
      a dicha asignatura.*/
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
       
      } catch (error) {
        console.log(error);
      }
    };

    obtenerEstudiantes();
  }, [estudiantesId]);

  
  /* Funcion que permite  desmarcar las casillas que previamente fueron seleccionadas. */
  const DesmarcarTodos = () => {
    const checkboxes = document.getElementsByName('estudiante');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const Selecionados = () => {
    const checkboxes = document.getElementsByName('estudiante');
    const estudiantesSeleccionados = Array.from(checkboxes).reduce((seleccionados, estudianteCheckbox) => {
      if (estudianteCheckbox.checked) {
        const estudianteId = estudianteCheckbox.value;
        const estudiante = estudiantes.find((est) => est.estudiante_id === estudianteId);
        if (estudiante) {
          seleccionados.push(estudiante);
        }
      }
      return seleccionados;
    }, []);
    setEstudiantes(estudiantesSeleccionados);
  };
  

 /*useEffect(() => {
    if (botonSeleccionado === 1) {
      Selecionados();
    }
  }, [botonSeleccionado]); */

  /*Segun el valor obtenido en el input se filta el estudiante
    el cual vaya cumpliendo con las caracteristicas del nombre que se este digitando. */
  const handleInput = ({ target }) => {
		setFilter(target.value)
	}
  const estudiantesFiltrados = estudiantes.filter((estudiante) =>
  estudiante.nombre && estudiante.nombre.toLowerCase().includes(filter.toLowerCase()));


  console.log(botonSeleccionado);

  return (
    <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        border: "1px solid black",backgroundColor: "#f2f2f2" }}
      >
   <Modal.Header className='header-gestion-estudiante'>
      <div className="header-content-gestion-estudiante">
      <button className="header-boton" onClick={props.onHide}>X</button>
        <Modal.Title className="header-titulo">
          GESTION ESTUDIANTES
        </Modal.Title> 
      </div>
    </Modal.Header>

      <Modal.Body>
       
      <Box sx={{display: 'grid',width: '75vw'}}>

        <Box sx={{height: '10vh',display:'flex',marginTop:'4vh'}}>
          <div class="search-container">
            <input type="text" id="search-input" placeholder="Buscar estudiante por nombre"
              onChange={handleInput}
            />
            <span class="search-icon">&#128269;</span>
          </div>
          <GrupoBoton setBotonSeleccionado={setBotonSeleccionado}/>
          <Button className='desmarcar-todos' onClick={DesmarcarTodos}>DESMARCAR TODOS</Button>
        </Box>


        <Box sx={{height: '50vh',overflow: 'auto'}}>
          <div className='contenedor-gestion-estudiante'>
              
          {estudiantesFiltrados.length > 0  ?(
        <>
          {estudiantesFiltrados.map((estudiante) => (
            <div className='nombre-gestion-estudiante' key={estudiante.estudiante_id}>
              <label htmlFor={estudiante.estudiante_id}>{estudiante.nombre}</label>
              <input type='checkbox' id={estudiante.estudiante_id} name='estudiante' 
                value={estudiante.estudiante_id} />
            </div>
          ))}
        </>
      ):(
        <p>No se encontró el estudiante.</p>
      ) }
              
          </div>
        </Box>

      </Box>

      </Modal.Body>

    </Modal>
  );
}export default GestionEstudiante;