import { useRef, useMemo, useState } from 'react';
import { RandType } from './types';

type OddsSquareProps = {
  numerator?: number;
  denominator: number;
  rand: RandType;
};

export const OddsSquare = ({ numerator = 1, denominator, rand }: OddsSquareProps) => {
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
