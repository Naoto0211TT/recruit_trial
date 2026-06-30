declare class Stats {
  dom: HTMLDivElement;

  REVISION: number;

  begin(): void;

  end(): number;

  /**
   * @param value 0:fps, 1: ms, 2: mb, 3+: custom
   */
  showPanel(value: number): void;

  update(): void;
}

declare module 'stats-js' {
  export = Stats;
}
