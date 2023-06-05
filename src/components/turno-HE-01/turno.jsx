import { Box } from '@mui/material';
import SearchAppBar from "./navbar_turno"


function Turno(){
    return(

        <Box sx={{display: 'grid'}}>

        <Box sx={{height: '14vh', background: '#F7F7F7', m: 1, paddingLeft: theme => theme.spacing(3),
                  paddingRight: theme => theme.spacing(3) }}>
           <SearchAppBar/>
        </Box>
        
        <Box sx={{overflowY: 'auto', height: '45vh', background: '#F7F7F7', m: 1, borderRadius: 3, paddingLeft: theme => theme.spacing(3),
                  paddingRight: theme => theme.spacing(3), border: '1px solid #DFE0E2' }}>
           caja 2
        </Box>
    </Box>
    );
}  export default Turno;