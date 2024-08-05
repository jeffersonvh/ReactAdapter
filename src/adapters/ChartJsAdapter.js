import ChartAdapter from './ChartAdapter';
import { Chart } from 'chart.js/auto';

class ChartJsAdapter extends ChartAdapter {
  constructor(container) {
    super(container);
    this.container = container;
    this.chartInstance = new Chart(this.container, {
      type: 'bar',
      data: {},
      options: {}
    });
  }

  render(data) {
    console.log(this.container);
    this.chartInstance.data = data;
    this.chartInstance.update();
  }

  destroy() {
    this.chartInstance.destroy();
  }
}

export default ChartJsAdapter;