import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardEstado from './CardEstado';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { BsPersonVideo3,BsArrowCounterclockwise } from 'react-icons/bs';
import { BiCalendarEvent } from 'react-icons/bi';
import { HiClipboardList } from 'react-icons/hi';

function EstadoAsignatura(props) {
  return (
    <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        border: "1px solid black",backgroundColor: "#f2f2f2" }}
      >
   <Modal.Header className='header-estado'>
      <div className="header-content">
      <button className="header-boton" onClick={props.onHide}>X</button>
        <Modal.Title className="header-titulo">
          ESTADO DE LA ASIGNATURA
        </Modal.Title> 
      </div>
    </Modal.Header>

      <Modal.Body>
          <div className='body'>
            <div className='body-subtitulo'>
            CUIDADO DE ENFERMERIA EN SALUD MENTAL
            </div>
             
            <div className='body-contenido-estado'>
              <CardEstado key={'1'}
                imagen={IoPersonCircleSharp} titulo={'ESTUDIANTES'} subtitulo={'24 estudiantes'} boton={'COMPLETO'}
              />

              <CardEstado key={'2'}
               imagen={BsPersonVideo3} titulo={'PROFESORES'} subtitulo={'faltan 2'} boton={'VERIFICAR'}
              />

              <CardEstado key={'3'}
                imagen={BsArrowCounterclockwise} titulo={'ROTES'} subtitulo={'sin'} boton={'AGREGAR'}
              />

              <CardEstado key={'4'}
                imagen={BiCalendarEvent} titulo={'TURNOS'} subtitulo={'30 turnos'} boton={'COMPLETO'}
              />

              <CardEstado key={'5'}
                imagen={HiClipboardList} titulo={'DOCUMENTOS'} subtitulo={'2 documentos'} boton={'VERIFICAR'}
              />
            </div>
          </div>
      </Modal.Body>
      <Modal.Footer className='estado-asignatura-footer-boton'>
        <Button >ACEPTAR</Button>
      </Modal.Footer>
    </Modal>
  );
}export default EstadoAsignatura;

