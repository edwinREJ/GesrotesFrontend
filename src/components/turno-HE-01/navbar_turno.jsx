import * as React from 'react';
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
import BotonGestionEstudiante from '../gestionestudiante-HE-02/BotonGestionEstudiante';
import BotonCrearEtiqueta from './BotonCrearEtiqueta';
import './stylesTurno.css'


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
    marginLeft: theme.spacing(2),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledSearchEstudentBar = styled(InputBase)(({ theme }) => ({
  color: 'inherit', 
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    width: '100%',
  },
}));

function SearchYear() {
  const defaultProps = {
    options: Years,
    getOptionLabel: (option) => option.label,
  };
  return (
    <Stack spacing={1} sx={{ width: 100 }}>
      <Autocomplete
        {...defaultProps}
        renderInput={(params) => (
          <TextField {...params} label="2022" variant="standard" />
        )}
      />
     
    </Stack>
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
    <Stack spacing={1} sx={{ width: 150 }}>
      <Autocomplete
        {...defaultProps}
        renderInput={(params) => (
          <TextField {...params} label="Enero" variant="standard" />
        )}
      />
     
    </Stack>
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <BotonGestionEstudiante className='boton-turno'/>
          <BotonCrearEtiqueta className='boton-turno'/>
          <Button variant="contained">Alimentacion</Button>
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
