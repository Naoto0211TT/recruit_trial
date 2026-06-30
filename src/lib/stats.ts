import StatsJs from 'stats-js';

class Stats {
  instance: StatsJs;

  private id = 0;

  constructor() {
    this.instance = new StatsJs();

    this.init();
  }

  destroy() {
    if (this.id) {
      cancelAnimationFrame(this.id);
    }

    this.instance.dom.remove();
  }

  monitor() {
    this.instance.begin();
    this.instance.end();

    this.id = requestAnimationFrame(this.monitor.bind(this));
  }

  start() {
    this.id = requestAnimationFrame(this.monitor.bind(this));
  }

  private init() {
    Object.assign(this.instance.dom.style, {
      position: 'fixed',
      height: 'max-content',
      top: 'auto',
      bottom: '0',
    });

    document.body.append(this.instance.dom);
  }
}

export default Stats;
