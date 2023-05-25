import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './styles.css';
import AsociarEtiqueta from "./AsociarEtiqueta";
import CrearEtiquetas from "./CrearEtiqueta";
import React from 'react';

function MyButtonGroup() {
  const [activeButton, setActiveButton] = React.useState(0);
  const [mostrarAsociarEtiqueta, setMostrarAsociarEtiqueta] = React.useState(false);
  const [mostrarCrearEtiqueta, setMostrarCrearEtiqueta] = React.useState(true);

  const handleMostrarAsociarEtiqueta = () => {
    setActiveButton(1);
    setMostrarAsociarEtiqueta(true);
    setMostrarCrearEtiqueta(false);
  };

  const handleMostrarCrearEtiqueta = () => {
    setActiveButton(0);
    if (!mostrarCrearEtiqueta) {
      setMostrarAsociarEtiqueta(false);
      setMostrarCrearEtiqueta(true);
    }
  };

  return (
    <div>
      <ButtonGroup variant="contained" color="primary" className="button-group">
        <Button 
          style={{ backgroundColor: activeButton === 0 ? "red" : "white" }}
          onClick={handleMostrarCrearEtiqueta}
        >
          CREAR ETIQUETAS
        </Button>
        <Button 
          style={{ backgroundColor: activeButton === 1 ? "red" : "white" }}
          onClick={handleMostrarAsociarEtiqueta}
        >
          ASOCIAR ETIQUETAS
        </Button>
      </ButtonGroup>
      {mostrarCrearEtiqueta && <CrearEtiquetas />}
      {mostrarAsociarEtiqueta && <AsociarEtiqueta />}
    </div>
  );
}

export default MyButtonGroup;