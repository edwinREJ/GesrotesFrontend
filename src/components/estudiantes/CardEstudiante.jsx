import { Card, Button } from 'react-bootstrap';
import './styles.css'
import EliminarRegistro from './EliminarRegistro'

function CardEstudiante({foto, nombre, estudiante_id, usuario,isEliminar,asignatura_id }) {


  /* Este metodo nos permite consumir un microservicio el cual permite
  registrar un estudiante en la asignatura que previamente selecciono. */
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



