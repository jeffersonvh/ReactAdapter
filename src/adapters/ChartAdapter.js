class ChartAdapter {
    constructor(container) {
      if (new.target === ChartAdapter) {
        throw new Error('Cannot instantiate Abstract Class ChartAdapter directly');
      }
      this.container = container;
    }
  
    render(data) {
      throw new Error('Render method must be implemented');
    }
  
    destroy() {
      throw new Error('Destroy method must be implemented');
    }
  }
  
  export default ChartAdapter;
  