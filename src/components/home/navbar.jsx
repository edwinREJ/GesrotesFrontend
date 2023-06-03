import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CiLogout } from 'react-icons/ci';
import { VscBook,VscThreeBars,VscWorkspaceTrusted } from 'react-icons/vsc';
import { BsPersonCheckFill, BsCardChecklist } from 'react-icons/bs';
import { RiUserSettingsFill } from 'react-icons/ri'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import React, { useState } from 'react';
import {Layout, Menu, Button } from 'antd';

import './styles.css'

const { Sider } = Layout;


function NavbarB() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState('1');

  const handleMenuSelect = ({ key }) => {
    setSelectedItem(key);
  };

  const itemsGestion = [
    { key: '1', label: 'Verificar Estudiantes', icon: <BsCardChecklist  /> , path: "/BotonGestionEstudiante"},
    { key: '2', label: 'Verificar Docentes', icon: <BsPersonCheckFill /> , path: "/CrearEtiqueta"},
    { key: '3', label: 'Asignaturas', icon: <VscBook />, path: "/ListaDeAsignaturas"},
  ];

  const itemsPerfil = [
    { key: '4', label: 'Configuración', icon: <RiUserSettingsFill /> },
    { key: '5', label: ' Salir', icon: <CiLogout /> },
  ];

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />

        <div className="collapse-button-container">
          <div className="icon-text-container">
          <VscWorkspaceTrusted />
            <span className="collapse-button-title">{collapsed ? '' : 'Gesrotes'}</span>
          </div>
          <Button
            type="text"
            icon={collapsed ? <VscThreeBars /> : <VscThreeBars />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '20px',
              width: 30,
              height: 35,
            }}
          />
        </div>
     
      <Menu className="menu-divider"
        selectedKeys={[selectedItem]}
        onSelect={handleMenuSelect}
      >
        <p>{collapsed ? '' : 'GESTIÓN'}</p>
        {itemsGestion.map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            className={selectedItem === item.key ? 'selected-menu-item' : null}
          >
            {item.label}
            <NavLink to={item.path}>{item.label}</NavLink>
          </Menu.Item>
        ))}
      </Menu>
      
      <Menu className="menu-divider"
        
        selectedKeys={[selectedItem]}
        onSelect={handleMenuSelect}
      >
        <p>{collapsed ? '' : 'MI PERFIL'}</p>
        {itemsPerfil.map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            className={selectedItem === item.key ? 'selected-menu-item' : null}
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
      <div className="contacto">
          <span className="icono-contacto"><FaPhoneSquareAlt /></span>
            <span className="texto">
              <span className="titulo">Contactanos</span>
              <br />
              <span className="numero">350 890 2365</span>
            </span>
        </div>
    </Sider>

    

  );
}

export default NavbarB;




