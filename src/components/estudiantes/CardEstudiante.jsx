import { Card, Button } from 'react-bootstrap';
import './styles.css'
import EliminarRegistro from './EliminarRegistro'

function CardEstudiante({ima, nombre, p1, p2,isEliminar }) {
  return (
    <Card className="card-custom">
        <Card.Header className="card-header">
            <div className="profile-info">
                <img
                src={ima}
                alt="User profile"
                className="profile-image"
                />
                <div className="profile-details">
                <Card.Title>{nombre}</Card.Title>
                <p>{p1}</p>
                <p>{p2}</p>
                </div>
            </div>
        </Card.Header>
        
        <Card.Body >
          {isEliminar ? (
            <EliminarRegistro nombre={nombre}/>
          ) : (
            <Button variant="primary" className='registrar-estudiante'>Registrar</Button>
          )}
        </Card.Body>

    </Card>

  );
}

export default CardEstudiante;



