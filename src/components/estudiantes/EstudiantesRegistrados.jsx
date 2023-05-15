import React from 'react';
import CardEstudiante from './CardEstudiante';
import useEstudiantes from './LER';


const EstudiantesRegistrados = () => {
    
    const generarImagen = () => {
      const id = Math.floor(Math.random() * 1000); // generamos un id aleatorio
      return `https://robohash.org/${id}.png?size=200x200`;
    };
  
    const { estudiantes, setEstudiantes } = useEstudiantes();

    return (
      <div className="card-container">
        {estudiantes.map((estudiante) => (
          <CardEstudiante
            key={estudiante.nombre}
            ima={generarImagen()}
            nombre={estudiante.nombre}
            p1={estudiante.p1}
            p2={estudiante.p2}
            isEliminar={true}
          />
        ))}
      </div>
    );
  };
  
  export default EstudiantesRegistrados;

  // const estudiantes = [
  //   { nombre: "Edwin Espinosa", p1: "1", p2: "2" },
  //   { nombre: "Juan Perez", p1: "3", p2: "4" },
  //   { nombre: "Maria Garcia", p1: "5", p2: "6" },
  //   { nombre: "Edwin Espinosa", p1: "1", p2: "2" },
  //   { nombre: "Juan Perez", p1: "3", p2: "4" },
  //   { nombre: "Maria Garcia", p1: "5", p2: "6" },
  //   { nombre: "Edwin Espinosa", p1: "1", p2: "2" },
  //   { nombre: "Juan Perez", p1: "3", p2: "4" },
  //   { nombre: "Maria Garcia", p1: "5", p2: "6" },
  // ];