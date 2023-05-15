import { Box } from '@mui/material'


function Turno(){
    return(

        <Box sx={{display: 'grid'}}>

        <Box sx={{ height: '14vh', background: '#F7F7F7', border: '1px solid #DFE0E2' }}>
            <>Arriba</>
        </Box>
        
        <Box sx={{overflowY: 'auto', height: '45vh', background: '#F7F7F7', m:1, borderRadius: 3, border: '1px solid #DFE0E2' }}>
          <>Abajo</>
        </Box>
    </Box>
    );
}  export default Turno;