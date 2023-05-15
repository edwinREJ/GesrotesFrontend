import { Button } from 'react-bootstrap';
import './styles.css'
import useEstudiantes from './LER';

function EliminarRegistro(nombre){

    const { estudiantes, setEstudiantes } = useEstudiantes();
    
    const eliminarEstudiante = (nombre) => {
        // Usa el método `filter` para crear una nueva lista que excluya al estudiante
        // cuyo nombre coincide con el valor pasado como argumento.
        
        const nuevaLista = estudiantes.filter(estudiante => estudiante.nombre !== nombre);
      
        // Actualiza el estado de `estudiantes` con la nueva lista usando `setEstudiantes`.
        setEstudiantes(nuevaLista);
      };
    return(
        <Button className='eliminar-registro'onClick={() => eliminarEstudiante(nombre)}>Eliminar Registro</Button>
        
    );


}export default EliminarRegistro;