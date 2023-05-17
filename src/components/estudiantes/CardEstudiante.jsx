import { Card, Button } from 'react-bootstrap';
import './styles.css'
import EliminarRegistro from './EliminarRegistro'

function CardEstudiante({foto, nombre, estudiante_id, usuario,isEliminar,asignatura_id }) {

  const handleRegistrarClick = () => {
    // Construir el objeto de datos a enviar
    const datos = {
      asignatura_id: asignatura_id,
      estudiante_id: estudiante_id
    };
    // Realizar la solicitud POST utilizando fetch
    fetch('http://localhost:2008/RegistrarEstudiante', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
      
    })
      .then(response => response.json())
      .then(data => {
        // Manejar la respuesta del backend
        console.log(data);
      })
      .catch(error => {
        // Manejar errores
        console.error('Error:', error);
      });
  };


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
            <EliminarRegistro nombre={nombre}/>
          ) : (
            <Button variant="primary" className='registrar-estudiante' 
            onClick={handleRegistrarClick}>Registrar</Button>
          )}
        </Card.Body>

    </Card>

  );
}

export default CardEstudiante;



