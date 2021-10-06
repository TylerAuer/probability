export type RandType = {
  val: number;
  cycle: number;
  running: boolean;
};

enum OddsTypes {
  'dots',
  'squares',
}

export type Odds = {
  numerator?: number;
  denominator: number;
  type: keyof typeof OddsTypes;
};

export type Simulation = {
  title: string;
  description: string;
  OddsList: Odds[];
  initialClockSpeedInMs?: number;
};
