import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Layout from './components/home/layout';
import BotonCrearEtiqueta from './components/turno-HE-01/BotonCrearEtiqueta';
import NavbarB from './components/home/navbar';
import TabAsignatura from './components/asignatura-HE-10/TabAsignatura';
import ListaDeAsignaturas from './components/asignatura-HE-10/ListaDeAsignaturas';
import EstadoAsignatura from './components/asignatura-HE-10/EstadoAsignatura';
import BotonGestionEstudiante from './components/gestionestudiante-HE-02/BotonGestionEstudiante'
import Turno from './components/turno-HE-01/turno'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="navbar" element={<NavbarB />} />
          <Route path="CrearEtiqueta" element={<BotonCrearEtiqueta />} />
          <Route path="/ListaDeAsignaturas" element={<ListaDeAsignaturas />} />
          <Route path="/ListaDeAsignaturas/TabAsignatura/:asignatura_id" element={<TabAsignatura />} />
          <Route path="EstadoAsignatura" element={<EstadoAsignatura />} />
          <Route path="Turno" element={<Turno />} />
          
        </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
