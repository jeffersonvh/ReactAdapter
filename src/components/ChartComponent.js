import React, { useEffect, useRef } from 'react';
import ChartJsAdapter from '../adapters/ChartJsAdapter';
import RechartsAdapter from '../adapters/RechartsAdapter';

const ChartComponent = ({ data, library }) => {
  const containerRef = useRef(null);
  const chartAdapterRef = useRef(null);

  useEffect(() => {
    if (library === 'chartjs') {
      chartAdapterRef.current = new ChartJsAdapter(containerRef.current);
    } else if (library === 'recharts') {
      chartAdapterRef.current = new RechartsAdapter(containerRef.current);
    }

    chartAdapterRef.current.render(data);

    return () => {
      chartAdapterRef.current.destroy();
    };
  }, [data, library]);

  if (library === 'chartjs') {
    return <canvas ref={containerRef} style={{ width: '100%', height: '300px' }}></canvas>;
  } else if (library === 'recharts') {
    return <div ref={containerRef} style={{ width: '100%', height: '300px' }}></div>;
  }
  
};

export default ChartComponent;
