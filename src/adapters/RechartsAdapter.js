import ChartAdapter from './ChartAdapter';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import React from 'react';
import ReactDOM from 'react-dom';

class RechartsAdapter extends ChartAdapter {
  constructor(container) {
    super(container);
    this.container = container;
  }

  render(data) {
    const ChartComponent = (
      <BarChart width={400} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    );

    ReactDOM.render(ChartComponent, this.container);
  }

  destroy() {
    ReactDOM.unmountComponentAtNode(this.container);
  }
}

export default RechartsAdapter;
