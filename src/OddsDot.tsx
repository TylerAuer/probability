import { useRef, useMemo, useState } from 'react';
import { RandType } from './types';

const SHARED_SX = {
  height: '20px',
  width: '20px',
  borderRadius: '50%',
  margin: '2px',
};

const SUCCESS_SX = {
  ...SHARED_SX,
  backgroundColor: 'red',
};

const NOT_YET_SX = {
  ...SHARED_SX,
  backgroundColor: '#eee',
};

type OddsDotProps = {
  numerator?: number;
  denominator: number;
  rand: RandType;
};

export const OddsDot = ({ numerator = 1, denominator, rand }: OddsDotProps) => {
  const [hasSucceeded, setHasSucceeded] = useState(false);
  const modifier = useRef(Math.random());

  const targetMax = useMemo(() => numerator / denominator, [numerator, denominator]);
  const modifiedProbability = (rand.val + modifier.current) % 1;
  const isSuccess = modifiedProbability <= targetMax;

  if (isSuccess && !hasSucceeded) {
    setHasSucceeded(true);
  }

  return <div style={hasSucceeded ? SUCCESS_SX : NOT_YET_SX} />;
};
