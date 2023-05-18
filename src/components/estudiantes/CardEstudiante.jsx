import { Card} from 'react-bootstrap';
import './styles.css'
import EliminarRegistro from './EliminarRegistro'
import RegistrarEstudiante from './RegistrarEstudiante';

function CardEstudiante({foto, nombre, estudiante_id, usuario,isEliminar,asignatura_id }) {


  /* En esta parte como tal se establece la estuctura de la card con sus respectivos estilos,
      cabe recalcar que en esta parte se juega con una condiccion y dependiendo de donde es llamada
      esta funcion se imprime el boton adecuado, ya sea eliminar o registrar.*/

  return (
    <Card className="card-custom">
        <Card.Header className="card-header">
            <div className="profile-info">
                <img
                src={foto}
                alt="User profile"
                className="profile-image"
                />
                <div className="profile-details">
                <Card.Title>{nombre}</Card.Title>
                <p>{estudiante_id}</p>
                <p>{usuario}</p>
                </div>
            </div>
        </Card.Header>
        
        <Card.Body >
          {isEliminar ? (
            <EliminarRegistro asignatura_id={asignatura_id} estudiante_id={estudiante_id}/>
          ) : (
            <RegistrarEstudiante asignatura_id={asignatura_id} estudiante_id={estudiante_id}/>
          )}
        </Card.Body>

    </Card>

  );
}

export default CardEstudiante;



