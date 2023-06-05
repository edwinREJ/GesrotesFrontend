import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './StylesGestionEstudiante.css';
import React, { useState } from "react";

function GrupoBoton({setBotonSeleccionado}) {
  const [activeButton, setActiveButton] = useState(0);

  const todos = () => {
    setActiveButton(0);
    setBotonSeleccionado(0);
  };

  const seleccionados = () => {
    setActiveButton(1);
    setBotonSeleccionado(1);
  };

  const no_seleccionados = () => {
    setActiveButton(2);
    setBotonSeleccionado(2);
  };

  return (
    <div>
      <ButtonGroup className="grupo-boton">
        <Button
          style={{ backgroundColor: activeButton === 0 ? "#960D0D" : "white" ,
                color: activeButton === 0 ? "white" : "#343434",}}
          onClick={todos}
        >
          TODOS
        </Button>

        <Button
          style={{ backgroundColor: activeButton === 1 ? "#960D0D" : "white",
          color: activeButton === 1 ? "white" : "#343434", }}
          onClick={seleccionados}
        >
          SELECCIONADOS
        </Button>

        <Button
          style={{ backgroundColor: activeButton === 2 ? "#960D0D" : "white",
          color: activeButton === 2 ? "white" : "#343434", }}
          onClick={no_seleccionados}
        >
          NO SELECCIONADOS
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default GrupoBoton;
