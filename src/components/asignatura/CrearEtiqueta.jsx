import Button from 'react-bootstrap/Button';
import ModalEtiqueta from "../gestionetiquetas/ModalEtiqueta";
import React, { useState } from 'react';

function CrearEtiqueta(){
  const [modalShow, setModalShow] = React.useState(false);
    return(
      <div ><Button variant="primary"  onClick={()  => setModalShow(true)} >
      Crear etiqueta
    </Button>

    <
    ModalEtiqueta show={modalShow}
      onHide={() => setModalShow(false)}
    /></div>
    );
}export default CrearEtiqueta;