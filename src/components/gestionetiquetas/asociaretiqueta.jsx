import { Box } from '@mui/material'
import './styles.css';
import React, { useState } from "react";
import DenseTableAsociar from './datatableasociar'
import Button from '@mui/material/Button';


function AsociarEtiqueta() {

const [datos, setDatos] = useState([]);
const [etiquetaValue, setEtiquetaValue] = useState("");
const [servicioValue, setServicioValue] = useState("");
const opcionesEtiquetas = [
  { id: 1, nombre: "Etiqueta 1" },
  { id: 2, nombre: "Etiqueta 2" },
  { id: 3, nombre: "Etiqueta 3" },
];

const opcionesServicios = [
  { id: 1, nombre: "Servicio 1" },
  { id: 2, nombre: "Servicio 2" },
  { id: 3, nombre: "Servicio 3" },
];

    const asociaretiqueta = () => {
        const nuevaasociacion = {
        etiqueta: etiquetaValue,
        servicio: servicioValue,
        };
        setDatos([...datos, nuevaasociacion]);
        setEtiquetaValue("");
        setServicioValue("");
    };


    return(
   
      <Box sx={{ minWidth: '100vh',height: '60vh',marginTop:'4vh',marginLeft:'2vw',marginRight:'2vw'}}>

        <Box sx={{ overflow: 'hidden', display: 'grid', gridTemplateColumns: 'auto 1fr' ,borderTop: '1px solid #707070'}}>
          <Box sx={{ minWidth: '50vh', height: '30vh',marginLeft:'7vw',marginTop:'5vh',borderRight: '1px solid #707070',marginBottom:'5vh'}}>
              <form>
                <label htmlFor="etiqueta">Selecciona una etiqueta:</label>
                <select className='select-etiqueta'
                  value={etiquetaValue}
                  onChange={(event) => setEtiquetaValue(event.target.value)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <option value="">Selecciona una etiqueta</option>
                  {opcionesEtiquetas.map((etiqueta) => (
                    <option key={etiqueta.id} value={etiqueta.nombre}>
                      {etiqueta.nombre}
                    </option>
                  ))}
                </select>
              </form>
          </Box>
          
          
          <Box sx={{ minWidth: '50vh', height: '30vh',marginLeft:'7vw',marginTop:'5vh'}}>
               <form>
                <label htmlFor="servicio">Selecciona un servicio:</label>
                <select className='select-etiqueta'
                  value={servicioValue}
                  onChange={(event) => setServicioValue(event.target.value)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <option value="">Selecciona un servicio</option>
                  {opcionesServicios.map((servicio) => (
                    <option key={servicio.id} value={servicio.nombre}>
                      {servicio.nombre}
                    </option>
                  ))}
                </select>
              </form>
              <Button variant="contained" onClick={asociaretiqueta} className="Button-etiqueta">Asociar</Button>

          </Box>
          </Box>

          <Box sx={{ borderTop: '1px solid #707070' ,marginLeft:'1vw',marginRight:'1vw'}}>
            <h5 align="center">LISTA DE ETIQUETAS ASOCIADAS</h5>
            <DenseTableAsociar data={datos} />
          </Box>
      </Box>
   
  );
       
  }
  
  export default AsociarEtiqueta;