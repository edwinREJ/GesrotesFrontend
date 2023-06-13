import React, { useState } from 'react';
import { MdOutlineAddCircle } from 'react-icons/md';
import './stylesTurno.css';

function CardTurno({ fecha }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    alert(fecha);
  };

  return (
    <div
      className={`card-turno ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className='card-turno-boton'>
        <MdOutlineAddCircle />
      </div>

      <div className='card-turno-p'>
        <p>Sin asignar</p>
      </div>
    </div>
  );
}

export default CardTurno;


