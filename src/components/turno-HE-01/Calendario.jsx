import React from 'react';
import { Table } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import CardTurno from './CardTurno';

dayjs.locale('es');

const Calendario = ({ selectedMonth, selectedYear }) => {
  const generateColumns = () => {
    const columns = [];

    // Columna adicional para "Fecha" y "Estudiante"
    columns.push({
      title: (
        <div>
          <div style={{ marginBottom: '8px', marginLeft: '25px' }}>
            <span>Fecha</span>
          </div>
          <hr
            style={{
              border: 'none',
              borderTop: '1px solid #000',
              transform: 'rotate(35deg)',
              width: '100%',
              margin: 'auto',
            }}
          />
          <div style={{ marginTop: '8px', marginRight: '45px' }}>
            <span>Estudiante</span>
          </div>
        </div>
      ),
      dataIndex: 'estudiante',
      align: 'center',
      key: 'estudiante',
      width: 200, // Ancho de la columna combinada
    });
    
    const daysInMonth = dayjs(`${selectedYear}-${selectedMonth}`).daysInMonth();
    console.log(daysInMonth)
    for (let day = 1; day <= daysInMonth; day++) {
      const date = dayjs(`${selectedYear}-${selectedMonth}-${day}`);
      const dayName = date.format('dddd');
      columns.push({
        title: (
            <div>
              <div>{dayName}</div>
              <div>{day}</div>
            </div>
          ),
        dataIndex: `${day}`,
        align: 'center',
        key: `${day}`,
        render: () => (
            <CardTurno fecha={date.format('YYYY-MM-DD')}/>
          ),
      });
    }

    return columns;
  };

  const estudiantes = [
    'Estudiante 1',
    'Estudiante 2',
    'Estudiante 3',
    'Estudiante 4',
    'Estudiante 5',
  ];
  const data = estudiantes.map((estudiante, index) => {
    const rowData = { key: index, estudiante };
    const daysInMonth = dayjs(`${selectedYear}-${selectedMonth}`).daysInMonth();
    for (let day = 1; day <= daysInMonth; day++) {
      const date = dayjs(`${selectedYear}-${selectedMonth}-${day}`);
      rowData[day] = date.format('YYYY-MM-DD');
    }
    return rowData;
  });

  return (
    <div>
      <Table columns={generateColumns()} dataSource={data} pagination={false} />
    </div>
  );
};

export default Calendario;









  
  





























