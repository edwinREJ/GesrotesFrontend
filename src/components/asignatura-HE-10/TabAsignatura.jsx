import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Estudiantes from '../estudiantes-HE-08/Estudiante';
import Turno from '../turno-HE-01/turno';
import { useParams } from 'react-router-dom';

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
        <Box sx={{ p: 1 }}>
          <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabAsignatura() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { asignatura_id } = useParams();

  const tabStyles = {
    root: {
      marginTop: '2vh',
      marginBottom: '2vh',
      borderBottom: '1px solid #DFE0E2',

      '&.Mui-selected': {
        border: '1px solid #DFE0E2',
        borderBottom: 'none',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
        color: '#092167',
      },
      '&.Mui-disabled': {
        color: '#343434',
      },
    },
  };

  return (
    <Box sx={{ fontFamily: "Poppins, sans-serif" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: 'none' } }}
          indicatorColor="transparent"
          variant="fullWidth"
        >
          <Tab label="Estudiantes" {...a11yProps(0)} sx={tabStyles.root} />
          <Tab label="Profesores" {...a11yProps(1)} sx={tabStyles.root} />
          <Tab label="Rotes" {...a11yProps(2)} sx={tabStyles.root} />
          <Tab label="Turnos" {...a11yProps(3)} sx={tabStyles.root} />
          <Tab label="Documentos" {...a11yProps(4)} sx={tabStyles.root} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Estudiantes asignatura_id={asignatura_id} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        Item dos
      </TabPanel>

      <TabPanel value={value} index={2}>
        Item tres
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Turno asignatura_id={asignatura_id}/>
      </TabPanel>

      <TabPanel value={value} index={4}>
        Item cinco
      </TabPanel>
    </Box>
  );
}



































//TabAsignatura