import { Navbar, Nav,Container} from "react-bootstrap";
import {  NavLink, } from "react-router-dom";
import { CiLogout} from 'react-icons/ci';
import { VscBook} from 'react-icons/vsc';
import {BsPersonCheckFill,BsCardChecklist} from 'react-icons/bs';
import  {RiUserSettingsFill} from 'react-icons/ri'
import {FaPhoneSquareAlt} from 'react-icons/fa'
import './styles.css'

function NavbarB() {
  
    return(
      <>
      <Navbar className="navBg" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>GESROTES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="gestion">
            <p>GESTIÓN</p>
            <Nav className="nav-grupos">
              <Nav.Link as={NavLink} exact to="/BotonGestionEstudiante" activeclassname="active">
                <BsCardChecklist /> Verificar Estudiantes
              </Nav.Link>
              <Nav.Link as={NavLink} to="/CrearEtiqueta" activeclassname="active">
                <BsPersonCheckFill />Verificar Docentes
              </Nav.Link>
              <Nav.Link as={NavLink} to="/ListaDeAsignaturas" activeClassName="active">
                  <VscBook /> Asignaturas
                </Nav.Link>
            </Nav>
          </div>

          <div className="perfil">
            <p>MI PERFIL</p>
            <Nav className="nav-grupos">
              <Nav.Link as={NavLink} to="/" activeclassname="active">
                <RiUserSettingsFill /> Configuración
              </Nav.Link>
              <Nav.Link as={NavLink} to="/" activeclassname="active">
                <CiLogout />Salir
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        <div className="contacto">
          <span className="icono-contacto"><FaPhoneSquareAlt /></span>
            <span className="texto">
              <span className="titulo">Contáctanos</span>
              <br />
              <span className="numero">+350 349 9786</span>
            </span>
        </div>
       
      

      </>
    );
} export default NavbarB;

