import React from 'react';
import CardAsignatura from './CardAsignatura';
import './styles.css'


const ListaDeAsignaturas = () => {
    
    const materias = [
        { asignatura_id: '1',titulo:'Cuidado de enfermeria en salud mental',subtitulo:'Enfermeria' },
        { asignatura_id: '2',titulo:'Cuidado al adulto mayor',subtitulo:'Enfermeria' },
        { asignatura_id: '3',titulo:'Salud para deportistas',subtitulo:'Enfermeria' },
    ];

    return (
      <div className="card-container-asignatura">
      
      {materias.map((materia) => (
        <CardAsignatura
          key={materia.asignatura_id}
          asignatura_id={materia.asignatura_id}
          titulo={materia.titulo}
          subtitulo={materia.subtitulo}
        />
      ))}
      
    </div>
    );
  };
  
  export default ListaDeAsignaturas;