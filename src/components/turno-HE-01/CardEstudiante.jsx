import './stylesTurno.css'

function CardEstudianteTurno({foto,nombre}){

    return(

        <div className="card-estudiante-turno">

            <div>
                <img
                src={foto}
                alt="User profile"
                className="foto-perfil-estudiante"
                />
            </div>
            
            <div className='nombre-estudiante-turno'>
                <p>{nombre}</p>
            </div>
            
        </div>
    );

}export default CardEstudianteTurno;