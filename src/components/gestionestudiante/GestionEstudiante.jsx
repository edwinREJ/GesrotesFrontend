import Modal from 'react-bootstrap/Modal';
import './StylesGestionEstudiante.css'
import { Box } from '@mui/material'
import useEstudiantes from '../estudiantes/LER';
import GrupoBoton from './GrupoBoton'
import Button from '@mui/material/Button';
import './StylesGestionEstudiante.css';

function EstadoAsignatura(props) {

  const { estudiantes, setEstudiantes } = useEstudiantes();

  
  /* Funcion que permite  desmarcar las casillas que previamente fueron seleccionadas. */
  const DesmarcarTodos = () => {
    const checkboxes = document.getElementsByName('estudiante');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

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
            <input type="text" id="search-input" placeholder="Buscar estudiante por nombre"/>
            <span class="search-icon">&#128269;</span>
          </div>
          <GrupoBoton/>
          <Button className='desmarcar-todos' onClick={DesmarcarTodos}>DESMARCAR TODOS</Button>
        </Box>


        <Box sx={{height: '50vh',overflow: 'auto'}}>
          <div className='contenedor-gestion-estudiante'>
              
            {estudiantes.map((estudiante) => (
              <div className='nombre-gestion-estudiante'>
                <label htmlFor={estudiante.id}>{estudiante.nombre}</label>
                <input type='checkbox' id={estudiante.id} name='estudiante' value={estudiante.id} />
              </div>
                ))}
              
          </div>
        </Box>

      </Box>

      </Modal.Body>

    </Modal>
  );
}export default EstadoAsignatura;