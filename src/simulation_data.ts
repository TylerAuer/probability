import { num } from './constants';
import { SimulationConfig, TargetConfig } from './types';

export const oneInAMillion: SimulationConfig = {
  title: 'One in a Million',
  description: 'How rare is a one-in-a-million chance',
  endpoint: 'one-in-a-million',
  targetList: generateIdenticalTargets(1_000, {
    denominator: num.million,
    type: 'dot',
  }),
};

export const oneInAHundred: SimulationConfig = {
  title: 'One in a Million',
  description: 'How rare is a one-in-a-million chance',
  endpoint: 'one-in-a-million',
  targetList: generateIdenticalTargets(num.hundred, {
    denominator: num.hundred,
    type: 'dot',
  }),
};

function generateIdenticalTargets(count: number, targetProps: TargetConfig) {
  const targets: TargetConfig[] = [];
  for (let i = 0; i < count; i++) {
    targets.push(targetProps);
  }
  return targets;
}
