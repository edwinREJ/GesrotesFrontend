import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './styles.css';
import MyButtonGroup from './buttongroup'

function ModalEtiqueta(props) {
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
              GESTIONAR ETIQUETAS
            </Modal.Title> 
          </div>
        </Modal.Header>

        <Modal.Body style={{ Height: 'calc(100vh - 210px)', overflowY: 'auto'}}>
            <MyButtonGroup/>
        </Modal.Body>
      </Modal>
      
    );
}export default ModalEtiqueta

