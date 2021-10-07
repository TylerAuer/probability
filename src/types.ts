export type RandType = {
  val: number;
  cycle: number;
  running: boolean;
};

export enum TargetKinds {
  'dot',
  'square',
}

export type TargetConfig = {
  numerator?: number;
  denominator: number;
  type: keyof typeof TargetKinds;
};

export type SimulationConfig = {
  title: string;
  description: string;
  endpoint: string;
  targetList: TargetConfig[];
  initialClockSpeedInMs?: number;
};
