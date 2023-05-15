import { useState } from 'react';
function useEstudiantes() {

  const [estudiantes, setEstudiantes] = useState([
    { nombre: "Edwin Espinosa", p1: "1", p2: "2" },
    { nombre: "Juan Perez", p1: "3", p2: "4" },
    { nombre: "Maria Garcia", p1: "5", p2: "6" },
    { nombre: "Edwin Espinosa", p1: "1", p2: "2" },
    { nombre: "Juan Perez", p1: "3", p2: "4" },
    { nombre: "Maria Garcia", p1: "5", p2: "6" },
    { nombre: "Edwin Espinosa", p1: "1", p2: "2" },
    { nombre: "Juan Perez", p1: "3", p2: "4" },
    { nombre: "Maria Garcia", p1: "5", p2: "6" },
    { nombre: "Edwin Espinosa", p1: "1", p2: "2" },
    { nombre: "Juan Perez", p1: "3", p2: "4" },
    { nombre: "Maria Garcia", p1: "5", p2: "6" },
    { nombre: "Edwin Espinosa", p1: "1", p2: "2" },
    { nombre: "Juan Perez", p1: "3", p2: "4" },
    { nombre: "Maria Garcia", p1: "5", p2: "6" },
    { nombre: "Edwin Espinosa", p1: "1", p2: "2" },
    { nombre: "Juan Perez", p1: "3", p2: "4" },
    { nombre: "Maria Garcia", p1: "5", p2: "6" },
  ]);

  return { estudiantes, setEstudiantes };
}

export default useEstudiantes;

  
  