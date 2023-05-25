import { Card} from 'react-bootstrap';
import './styles.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import EstadoAsignatura from './EstadoAsignatura';
import React, {useState} from 'react';

/* Esta funcion permite realizar la estructura de card asignatura, la cual se le establece 
   sus respectivos estilos. */

function CardAsignatura({asignatura_id,titulo,subtitulo}){

   

   const [modalShow, setModalShow] = React.useState(false);
   return(
   
        <Card className="card-custom-asignatura">

            <Card.Header className='card-header-asignatura' >
               <Card.Title className='titulo-asignatura'>
                  {titulo}
               </Card.Title>

               <Card.Subtitle className='sub-titulo-asignatura'>
                  {subtitulo}
               </Card.Subtitle>
            </Card.Header>

            <Card.Body className='card-body-asignatura'>

            </Card.Body>
            
            <Card.Footer>
            <div className='boton-asignatura'>
               <Button onClick={()  => setModalShow(true)} >
                  ESTADO DE LA ASIGNATURA
                  </Button>
                  <
                  EstadoAsignatura show={modalShow}
                  onHide={() => setModalShow(false)}
               />
                  
               
               <Link to={`/ListaDeAsignaturas/TabAsignatura/${asignatura_id}`}>
                  <Button>GESTIONAR ASIGNATURA</Button>
               </Link>

             </div>
            </Card.Footer>
        </Card>

   
   );
  }export default CardAsignatura;