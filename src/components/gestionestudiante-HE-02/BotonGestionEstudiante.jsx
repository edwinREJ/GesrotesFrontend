import Button from 'react-bootstrap/Button';
import GestionEstudiante from './GestionEstudiante'
import React, { useState } from 'react';

function BotonGestionEstudiante(){
  const [modalShow, setModalShow] = React.useState(false);
    return(
      <div ><Button variant="primary"  onClick={()  => setModalShow(true)} >
      Estudiante
    </Button>

    <
    GestionEstudiante show={modalShow}
      onHide={() => setModalShow(false)}
    /></div>
    );
}export default BotonGestionEstudiante;