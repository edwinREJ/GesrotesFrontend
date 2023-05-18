import { Box } from '@mui/material'
import EstudiantesRegistrados from './EstudiantesRegistrados';
import './styles.css'
import BuscarEstudianteGlobales from './BuscarEstudianteGlobales'
import EliminarTodo from './EliminarTodo'

function Estudiantes(props){
    const asignatura_id = props.asignatura_id;
    
    return(
        <Box sx={{ display: 'grid', gridTemplateColumns: '20vw 1fr' }}>

            <Box sx={{ width:'18vw',  paddingRight: theme => theme.spacing(1),overflow: 'auto',height: '68vh'}}>     
                    BuscarEstudiante
                    <BuscarEstudianteGlobales asignatura_id={asignatura_id}/>
            </Box>

            <Box sx={{overflow: 'auto',borderLeft: '2px solid #DFE0E2',height: '68vh', paddingLeft: theme => theme.spacing(2)
                  }}>
                  
                <Box sx={{display: 'grid'}}>
                    <Box sx={{height: '5vh', display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{margin: 0,marginLeft:'19vw'}}>
                            Estudiantes Registrados
                        </p>
                        <div style={{marginRight:'3.5vw'}}>
                            <EliminarTodo asignatura_id={asignatura_id}/>
                        </div>
                    </Box>
                    
                    <Box >
                        <EstudiantesRegistrados asignatura_id={asignatura_id}/>
                    </Box>  
                </Box>   

            </Box>
        </Box>
    );
}export default Estudiantes;


