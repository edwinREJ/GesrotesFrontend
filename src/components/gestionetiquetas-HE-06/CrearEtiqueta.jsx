import { Box } from '@mui/material'
import './styles.css';
import React, { useEffect, useState } from "react";
import TablaEtiquetas from './TablaEtiquetas'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useSelector} from 'react-redux';

function CrearEtiquetas() {

    const [nombreEtiqueta, setNombreEtiqueta] = useState("");
    const [escenarioSeleccionado, setEscenarioSeleccionado] = useState({ nombre: "", centrosalud_id: "" });
    const [etiquetas, setEtiquetas] = useState([]);
    const [opcionesEscenarios,setOpcionesEscenarios] = useState([]);
    const estado = useSelector(state => state.estado); // Obtener el estado desde Redux

    /* Se consume un microservicio para obtener los 
     escenarios que estan registrados en la base de datos.*/

    useEffect(() => {
      obtenerEscenarios();
    }, []);

    const obtenerEscenarios = async () => {
      try {
        const response = await fetch(`http://localhost:2102/CentroSalud`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
          }
        });
        const data = await response.json();
        setOpcionesEscenarios(data);
      } catch (error) {
        console.log(error);
      }
    };

    /* Se consume un microservicio para obtener las estiquetas que
      previamente ya han sido creadas en la base de datos, para asi 
      mostrar su respectiva informacion en la tabla. */
    useEffect(() => {
      obtenerEtiquetas();
    }, [estado]);

    const obtenerEtiquetas = async () => {
      try {
        const response = await fetch(`http://localhost:2006/Etiquetas`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
          }
        });
        const data = await response.json();
        setEtiquetas(data);
      } catch (error) {
        console.log(error);
      }
    };

    
  /* Se consume el microservicio para poder registrar una etiqueta en la base de datos
     donde se envia como parametro una nueva etiqueta. */

    const crearEtiqueta = async () => {
      await crearEtiquetaBackend();
    };

    const crearEtiquetaBackend = async () => {
      const nuevaEtiqueta = {
        centrosalud_id: escenarioSeleccionado.centrosalud_id,
        centrosalud_nombre: escenarioSeleccionado.centrosalud_nombre,
        nombre: nombreEtiqueta,
      };
      console.log(nuevaEtiqueta)
      try {
        const response = await axios.post('http://localhost:2006/Etiquetas', JSON.stringify(nuevaEtiqueta),{
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
          }
        });
        setEtiquetas([...etiquetas, response.data]);
        setNombreEtiqueta("");
        setEscenarioSeleccionado({ nombre: "", centrosalud_id: "" });
      } catch (error) {
        console.error(error);
      }
    };

    return(
   
      <Box sx={{ minWidth: '100vh',height: '70vh',marginTop:'4vh',marginLeft:'2vw',marginRight:'2vw'}}>

        <Box sx={{ overflow: 'hidden', display: 'grid', gridTemplateColumns: 'auto 1fr' ,borderTop: '1px solid #707070'}}>
          <Box sx={{ minWidth: '50vh', height: '30vh',marginLeft:'7vw',marginTop:'5vh',borderRight: '1px solid #707070',marginBottom:'5vh'}}>
            <form className="form">
                <label htmlFor="etiquetaInput">Nombre de etiqueta</label>
                <input
                  id="etiquetaInput"
                  label="Ingrese un nombre"
                  type="text"
                  value={nombreEtiqueta}
                  onChange={(event) => setNombreEtiqueta(event.target.value)}
                />
              </form>
          </Box>
          
          
          <Box sx={{ minWidth: '50vh', height: '30vh',marginLeft:'7vw',marginTop:'5vh'}}>
          <form className="form">
            <label>Selección de escenario</label>
            <select
              className='select-etiqueta'
              value={escenarioSeleccionado.nombre}
              onChange={(event) => {
                const selectedScenario = opcionesEscenarios.find((escenario) => escenario.nombre === event.target.value);
                if (selectedScenario) {
                  setEscenarioSeleccionado({ centrosalud_nombre: selectedScenario.nombre, centrosalud_id: selectedScenario.centrosalud_id });
                } else {
                  setEscenarioSeleccionado({ centrosalud_nombre: "", centrosalud_id: "" });
                }
              }}
            >
              <option value="">Selecciona el hospital</option>
              {opcionesEscenarios.map((escenario) => (
                <option key={escenario.nombre} value={escenario.nombre}>
                  {escenario.nombre}
                </option>
              ))}
            </select>
          </form>

          <Button variant="contained" onClick={() => crearEtiqueta()} className="Button-etiqueta">Crear</Button>

          </Box>
        </Box>

        <Box sx={{ borderTop: '1px solid #707070' ,marginLeft:'1vw',marginRight:'1vw'}}>
             <h5 align="center">LISTA DE ETIQUETAS CREADAS</h5>
            <TablaEtiquetas etiquetas={etiquetas} />
          </Box>
      </Box>
   
  );  
  }
  
  export default CrearEtiquetas;