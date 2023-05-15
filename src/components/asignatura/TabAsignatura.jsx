import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Estudiantes from '../estudiantes/Estudiante'
import Turno from '../turno/turno';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p:1  }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'Poppins", sans-serif': `simple-tabpanel-${index}`,
  };
}

export default function TabAsignatura() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyles = {
    root: {
      flexGrow: 1,
      fontFamily: '"Poppins", sans-serif',
      textTransform: 'none',
      minWidth: 0,
      minHeight: 0,
      fontWeight: 400,
      fontSize: '1rem',
      marginRight: '10px',
      marginTop: '1vh',
      marginBottom: '1vh',
      color: '#000000',
      '&.Mui-selected': {
        color: '#092167',
        backgroundColor: '#DFE0E2',
      },
      '&.Mui-disabled': {
        color: '#343434',
      },
    },
  };

   return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: 'none' } }}
          indicatorColor="transparent"
        >
          <Tab label="Estudiantes" {...a11yProps(0)} sx={tabStyles.root} />
          <Tab label="Profesores" {...a11yProps(1)} sx={tabStyles.root} />
          <Tab label="Rotes" {...a11yProps(2)} sx={tabStyles.root} />
          <Tab label="Turnos" {...a11yProps(3)} sx={tabStyles.root} />
          <Tab label="Documentos" {...a11yProps(4)} sx={tabStyles.root} />
        </Tabs>
      </Box>
      
      <TabPanel value={value} index={0}>
        <Estudiantes/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        Item dos
      </TabPanel>

      <TabPanel value={value} index={2}>
        Item tres
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Turno/>
      </TabPanel>

      <TabPanel value={value} index={4}>
        Item cinco
      </TabPanel>

    </Box>
  );
}



