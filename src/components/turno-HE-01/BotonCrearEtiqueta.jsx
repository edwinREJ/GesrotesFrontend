import Button from 'react-bootstrap/Button';
import ModalEtiqueta from "../gestionetiquetas-HE-06/ModalEtiqueta";
import React, { useState } from 'react';
import './stylesTurno.css'

function BotonCrearEtiqueta(){
  const [modalShow, setModalShow] = React.useState(false);
    return(
      <div ><Button variant="primary" onClick={()  => setModalShow(true)} >
      Gestion Etiquetas
    </Button>

    <
    ModalEtiqueta show={modalShow}
      onHide={() => setModalShow(false)}
    /></div>
    );
}export default BotonCrearEtiqueta;