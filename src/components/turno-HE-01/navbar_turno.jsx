import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import ModalEtiqueta from "../gestionetiquetas-HE-06/ModalEtiqueta";
import './stylesTurno.css'
import GestionEstudiante from '../gestionestudiante-HE-02/GestionEstudiante';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(7),
    width: 'auto',
  },
}));


/*Estilos del icono del buscador*/
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#707070',
}));

/*Estilos del input*/
const StyledSearchEstudentBar = styled(InputBase)(({ theme }) => ({
  marginRight: '2vw',
  color: 'inherit', 
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    width: '100%',
    color: 'black',
  },
}));


/* Se le da los estilos a buscador de año y mes*/
const StyledStack = styled(Stack)(({ theme }) => ({
  width: 100,
  marginTop: '-2vh',
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'center',
  border: 'none',
}));

function SearchYear() {
  const defaultProps = {
    options: Years,
    getOptionLabel: (option) => option.label,
  };
  return (
    <StyledStack spacing={1}>
      <Autocomplete
        {...defaultProps}
        renderInput={(params) => (
          <TextField className='text' {...params} label="Año" variant="standard" />
        )}
      />
    </StyledStack>
  );
}


const Years = [
  { label: 2023 },
  { label: 2024 },
  { label: 2025 },
  { label: 2026 },
  { label: 2027 },
  { label: 2028 },
  { label: 2029}
]

function SearchMonth() {
  const defaultProps = {
    options: Months,
    getOptionLabel: (option) => option.label,
  };
  return (
    <StyledStack spacing={1}>
      <Autocomplete
        {...defaultProps}
        renderInput={(params) => (
          <TextField {...params} label="Mes" variant="standard"    
          />
        )}
      />
     
     </StyledStack>
  );
}


const Months = [
  { label: 'Enero' },
  { label: 'Febrero' },
  { label: 'Marzo' },
  { label: 'Abril' },
  { label: 'Mayo' },
  { label: 'Junio' },
  { label: 'Julio'},
  { label: 'Agosto'},
  { label: 'Septiembre'},
  { label: 'Octubre'},
  { label: 'Noviembre'},
  { label: 'Diciembre'}
]




export default function SearchAppBar() {
  const [modalShowGEstudiantes, setModalShowGEstudiantes] = useState(false);
  const [modalShowGEtiquetas, setModalShowGEtiquetas] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='app-bar'>
        <Toolbar>
          
          <Button variant="contained" className="button" onClick={()  => setModalShowGEstudiantes(true)} >
            Gestion Estudiantes
          </Button>
          <GestionEstudiante show={modalShowGEstudiantes}
          onHide={() => setModalShowGEstudiantes(false)}/>
          
          <Button className="button" variant="contained" onClick={()  => setModalShowGEtiquetas(true)} >
            Gestion Etiquetas
          </Button>
          <ModalEtiqueta show={modalShowGEtiquetas}
          onHide={() => setModalShowGEtiquetas(false)}/>

          <Button variant="contained" className="button" >Alimentacion</Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledSearchEstudentBar
              placeholder="Buscar estudiante "
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <SearchYear/>
          <SearchMonth/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
