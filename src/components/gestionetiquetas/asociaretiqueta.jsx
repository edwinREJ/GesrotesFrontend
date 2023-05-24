import { Box } from '@mui/material'
import './styles.css';
import React, { useState,useEffect } from "react";
import DenseTableAsociar from './datatableasociar'
import Button from '@mui/material/Button';
import axios from 'axios';

function AsociarEtiqueta() {

const [datos, setDatos] = useState([]);
const [etiquetaValue, setEtiquetaValue] = useState([]);
const [servicioValue, setServicioValue] = useState([]);
const [etiquetas, setEtiquetas] = useState([]);
const [servicios, setServicios] = useState([]);
const [centroSeleccionado, setCentroSeleccionado] = useState({nombre_etiqueta:"", etiqueta_id: "", centrosalud_id: "" });


     /* Se consume un microservicio para obtener las estiquetas que
      previamente ya han sido creadas en la base de datos, para asi 
      mostrar su respectiva informacion en la tabla. */
      useEffect(() => {
        obtenerEtiquetas();
      }, []);
  
      const obtenerEtiquetas = async () => {
        try {
          const response = await fetch(`http://localhost:2006/Etiquetas`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
              ,'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
          });
          const data = await response.json();
          setEtiquetas(data);
        } catch (error) {
          console.log(error);
        }
      };


useEffect(() => {
  obtenerServicios();
},[centroSeleccionado.centrosalud_id,centroSeleccionado.etiqueta_id]);

const obtenerServicios = async () => {
  try {
    const response = await fetch(`http://localhost:2102/ServiciosCentroSalud/${centroSeleccionado.centrosalud_id}`,{
      method: 'GET',
      
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setServicios(data);
  } catch (error) {
    console.log(error);
  }
};

const asociaretiqueta = async () => {
  await asociaretiquetaBackend();
};

    const asociaretiquetaBackend = async () => {
      const nuevaasociacion = [centroSeleccionado.etiqueta_id, servicioValue];
      console.log(nuevaasociacion)
      try {
        const response = await axios.post('http://localhost:2006/EtiquetaServicio', nuevaasociacion)
        setDatos([...datos, response.data]);
        setEtiquetaValue("");
        setServicioValue(""); 
      } catch (error) {
        console.error(error);
      }
    };


    return(
   
      <Box sx={{ minWidth: '100vh',height: '70vh',marginTop:'4vh',marginLeft:'2vw',marginRight:'2vw'}}>

        <Box sx={{ overflow: 'hidden', display: 'grid', gridTemplateColumns: 'auto 1fr' ,borderTop: '1px solid #707070'}}>
          <Box sx={{ minWidth: '50vh', height: '30vh',marginLeft:'7vw',marginTop:'5vh',borderRight: '1px solid #707070',marginBottom:'5vh'}}>
              <form>
                <label htmlFor="etiqueta">Selecciona una etiqueta:</label>
                <select className='select-etiqueta'
                  value={centroSeleccionado.nombre_etiqueta}
                  onChange={(event) => {
                    const selectedCentro= etiquetas.find((etiqueta) => etiqueta.nombre === event.target.value);
                    if (selectedCentro) {
                      setCentroSeleccionado({nombre_etiqueta: selectedCentro.nombre_etiqueta, etiqueta_id: selectedCentro.etiqueta_id, centrosalud_id: selectedCentro.centrosalud_id });
                    } else {
                      console.log("yuca")
                      setCentroSeleccionado({nombre_etiqueta:"", etiqueta_id: "", centrosalud_id: "" });
                    }
                  }}
                >
                  <option value="">Selecciona una etiqueta</option>
                  {etiquetas.map((etiqueta) => (
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
                  {servicios.map((servicio) => (
                    <option key={servicio.id} value={servicio.centrosalud_id}>
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
            <DenseTableAsociar data={etiquetas} />
          </Box>
      </Box>
   
  );
       
  }
  
  export default AsociarEtiqueta;