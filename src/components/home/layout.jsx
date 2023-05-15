import { Box } from '@mui/material'
import NavbarB from './navbar';
import Breadcrumb from './breadcrumb'
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    /*Esta parte se divide la ventana en tres secciones la del menu, la de las migas 
    de pan y donde se muestra el contenido de la opcion elejida por el menu. */
    <Box sx={{ overflow: 'hidden', height: '100vh', display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
      
      <Box sx={{ minWidth: '30vh', height: '97vh', background: '#F7F7F7', m: 1, borderRadius: 3, paddingLeft: theme => theme.spacing(3),
               paddingRight: theme => theme.spacing(3), border: '1px solid #DFE0E2'}}>
        <NavbarB/> 
      </Box>
      
      <Box sx={{display: 'grid'}}>
        <Box sx={{ height: '14vh', background: '#F7F7F7', m: 1, borderRadius: 3, paddingLeft: theme => theme.spacing(3),
                  paddingRight: theme => theme.spacing(3), border: '1px solid #DFE0E2' }}>
            <Breadcrumb/>
        </Box>
        
        <Box sx={{ height: '80vh', background: '#F7F7F7', m: 1, borderRadius: 3, paddingLeft: theme => theme.spacing(3),
                  paddingRight: theme => theme.spacing(3), border: '1px solid #DFE0E2' }}>
          
            <Outlet></Outlet>
          
        </Box>
      </Box>
      
    </Box>
  )
}

export default Layout;