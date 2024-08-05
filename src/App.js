import React, { useState } from 'react';
import ChartComponent from './components/ChartComponent';

const App = () => {
  const [library, setLibrary] = useState('chartjs'); // Pode ser 'chartjs' ou 'recharts'

  const data = library === 'chartjs'
    ? {
        labels: ['A', 'B', 'C'],
        datasets: [{
          label: 'Values',
          data: [10, 20, 30],
          backgroundColor: 'blue',
        }]
      }
    : [
        { name: 'A', value: 10 },
        { name: 'B', value: 20 },
        { name: 'C', value: 30 },
      ];

  return (
    <div>
      <h1>Chart Example</h1>
      <button onClick={() => setLibrary('chartjs')}>Use Chart.js</button>
      <button onClick={() => setLibrary('recharts')}>Use Recharts</button>
      <ChartComponent data={data} library={library} />
    </div>
  );
};

export default App;
