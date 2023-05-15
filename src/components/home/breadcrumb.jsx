import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { BsHouseDoor } from 'react-icons/bs';
import './styles.css';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  return (
    <div role="presentation" className="breadcrumbs-container" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" separator={<span  style={{ color: '#092167',fontWeight: '600' }}> {'>'} </span>} fontWeight = '600' >
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center',fontWeight: '600'}}
          href="/"
          color = '#092167'
        >
          <BsHouseDoor sx={{ mr: 1.8 ,fontSize: '5rem'  }} atl='house'/>
        </Link>

        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color = '#092167'
          href="/material-ui/getting-started/installation/"
        >
          Asignaturas
        </Link>

        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color = '#092167'
          href="/material-ui/getting-started/installation/"
        >
          Cuidado de la salud mental
        </Link>
        
      </Breadcrumbs>
    </div>
  );
}

