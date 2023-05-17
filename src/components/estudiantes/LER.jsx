import { useState } from 'react';
function useEstudiantes() {

  const [estudiantes, setEstudiantes] = useState([
    { nombre: "Edwin Espinosa", estudiante_id: "10662", usuario: "edwinespj" },
    { nombre: "Juan Perez", estudiante_id: "3", usuario: "4" },
    { nombre: "Maria Garcia", estudiante_id: "5", usuario: "6" },
  
  ]);

  return { estudiantes, setEstudiantes };
}

export default useEstudiantes;

  
  