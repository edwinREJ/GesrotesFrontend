import React from "react";
import { Card, Button } from "react-bootstrap";
import './styles.css'

function CardEstado({imagen,titulo,subtitulo,boton}) {
    return (
        <Card className="card-estado">
          <Card.Img
            variant="top"
            as={imagen}
            className="card-estado-image-estudiantes"
          />
          <Card.Body className="d-flex flex-column justify-content-center">
            <Card.Title className='card-estado-titulo'>{titulo}</Card.Title>
            <Card.Subtitle className='card-estado-sub-titulo'>
            {subtitulo}
            </Card.Subtitle>
            <Button variant="primary" className="card-estado-button">
              {boton}
            </Button>
          </Card.Body>
        </Card>
      );
}

export default CardEstado;
