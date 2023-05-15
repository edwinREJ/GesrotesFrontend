import { Box } from '@mui/material'
import './styles.css';
import React, { useState } from "react";
import DenseTable from './datatable'
import Button from '@mui/material/Button';
import axios from 'axios';
function CrearEtiquetas() {

    const [nombreEtiqueta, setNombreEtiqueta] = useState("");
    const [escenarioSeleccionado, setEscenarioSeleccionado] = useState("");
    const [etiquetas, setEtiquetas] = useState([]);
    
  
    const opcionesEscenarios = [
      { id: 1, nombre: "Escenario 1" },
      { id: 2, nombre: "Escenario 2" },
      { id: 3, nombre: "Escenario 3" },
    ];
  
    const crearEtiqueta = async () => {
      await crearEtiquetaBackend();
    };


    const crearEtiquetaBackend = async () => {
      const nuevaEtiqueta = {
        centrosalud_id: '1',
        nombre: nombreEtiqueta,
      };
      try {
        const response = await axios.post('http://localhost:2020/', JSON.stringify(nuevaEtiqueta),{
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setEtiquetas([...etiquetas, response.data]);
        setNombreEtiqueta("");
        setEscenarioSeleccionado("");
      } catch (error) {
        console.error(error);
      }
    };

    return(
   
      <Box sx={{ minWidth: '100vh',height: '60vh',marginTop:'4vh',marginLeft:'2vw',marginRight:'2vw'}}>

        <Box sx={{ overflow: 'hidden', display: 'grid', gridTemplateColumns: 'auto 1fr' ,borderTop: '1px solid #707070'}}>
          <Box sx={{ minWidth: '50vh', height: '30vh',marginLeft:'7vw',marginTop:'5vh',borderRight: '1px solid #707070',marginBottom:'5vh'}}>
              <form>
                <label>Nombre de etiqueta</label>
                <input
                    label="Ingrese un nombre"
                    type="text"
                    value={nombreEtiqueta}
                    onChange={(event) => setNombreEtiqueta(event.target.value)}
                      />
                </form>
          </Box>
          
          
          <Box sx={{ minWidth: '50vh', height: '30vh',marginLeft:'7vw',marginTop:'5vh'}}>
               <form className="form">
                      <label>Seleccion de escenario</label>
                      <select className='select-etiqueta'
                          value={escenarioSeleccionado}
                          onChange={(event) => setEscenarioSeleccionado(event.target.value)}
                      >
                          <option value="">Selecciona un escenario</option>
                          {opcionesEscenarios.map((escenario) => (
                              <option key={escenario.id} value={escenario.nombre}>
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
            <DenseTable etiquetas={etiquetas} />
          </Box>
      </Box>
   
  );  
  }
  
  export default CrearEtiquetas;