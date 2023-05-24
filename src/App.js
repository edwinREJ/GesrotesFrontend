import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Layout from './components/home/layout';
import CrearEtiqueta from './components/asignatura/CrearEtiqueta.jsx';
import NavbarB from './components/home/navbar';
import TabAsignatura from './components/asignatura/TabAsignatura';
import ListaDeAsignaturas from './components/asignatura/ListaDeAsignaturas';
import EstadoAsignatura from './components/asignatura/EstadoAsignatura';
import BotonGestionEstudiante from './components/gestionestudiante/BotonGestionEstudiante'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="navbar" element={<NavbarB />} />
          <Route path="CrearEtiqueta" element={<CrearEtiqueta />} />
          <Route path="ListaDeAsignaturas" element={<ListaDeAsignaturas />} />
          <Route path="TabAsignatura/:asignatura_id" element={<TabAsignatura />} />
          <Route path="EstadoAsignatura" element={<EstadoAsignatura />} />
          <Route path="BotonGestionEstudiante" element={<BotonGestionEstudiante />} />
        </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
