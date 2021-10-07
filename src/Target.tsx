import { useRef, useMemo, useState } from 'react';
import { RandType, TargetKinds } from './types';

export type TargetProps = {
  type: keyof typeof TargetKinds;
  numerator?: number;
  denominator: number;
  rand: RandType;
};

/**
 * Wrapper that returns a specific target component.
 */
export const Target = ({ type, numerator = 1, denominator, rand }: TargetProps) => {
  switch (type) {
    case 'dot':
      return <TargetDot numerator={numerator} denominator={denominator} rand={rand} />;
    case 'square':
      return <TargetSquare numerator={numerator} denominator={denominator} rand={rand} />;
  }
};

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

type TargetTypeProps = {
  numerator: number;
  denominator: number;
  rand: RandType;
};

export const TargetDot = ({ numerator, denominator, rand }: TargetTypeProps) => {
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

export const TargetSquare = ({ numerator = 1, denominator, rand }: TargetTypeProps) => {
  const [hasSucceeded, setHasSucceeded] = useState(false);
  const successCycle = useRef<null | number>(null);
  const modifier = useRef(Math.random());

  const targetMax = useMemo(() => numerator / denominator, [numerator, denominator]);
  const modifiedProbability = (rand.val + modifier.current) % 1;
  const isSuccess = modifiedProbability <= targetMax;

  if (isSuccess && !hasSucceeded) {
    successCycle.current = rand.cycle;
    setHasSucceeded(true);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px',
        fontSize: '18px',
      }}
    >
      <div>
        {hasSucceeded ? `Success on try ${successCycle.current}` : `Failed ${rand.cycle} times`}
      </div>
      <div>
        {numerator} in {denominator}
      </div>
    </div>
  );
};
