import { useState, useMemo, useRef } from 'react';
import { useInterval } from './hooks/use_interval';

type RandType = {
  val: number;
  cycle: number;
  running: boolean;
};

// TODO: Add start/stop button
// TODO: Abstract creation of page into a data structure (ex: say odds wanted and page is generated)
// TODO: Style probabilities into boxes
// TODO: Targets scale values to 1 in n instead of 0 to 1 so can display rand value
// TODO: Animations when target is hit
// TODO: Adjustable speed
// TODO: Alternative Target display that is just a box that changes colors when hit
// TODO: Add sound effect for clock running
// TODO: Add close sounds effect
// TODO: Add target hit sound effect

export const ProbabilityArray = () => {
  const [clockSpeedMs, setClockSpeedMs] = useState(5);
  const [rand, setRand] = useState<RandType>({
    val: Math.random(),
    cycle: 1,
    running: true,
  });

  useInterval(() => {
    setRand({
      val: Math.random(),
      cycle: rand.cycle + 1,
      running: true,
    });
  }, clockSpeedMs);

  return (
    <>
      <h2>Cycle #{rand.cycle}</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Target rand={rand} denominator={2} />
        <Target rand={rand} denominator={4} />
        <Target rand={rand} denominator={8} />
        <Target rand={rand} denominator={16} />
        <Target rand={rand} denominator={32} />
        <Target rand={rand} denominator={64} />
        <Target rand={rand} denominator={128} />
        <Target rand={rand} denominator={256} />
        <Target rand={rand} denominator={512} />
        <Target rand={rand} denominator={1024} />
        <Target rand={rand} denominator={2048} />
        <Target rand={rand} denominator={4096} />
        <Target rand={rand} denominator={8192} />
        <Target rand={rand} denominator={16384} />
        <Target rand={rand} denominator={32768} />
        <Target rand={rand} denominator={65536} />
        <Target rand={rand} denominator={131072} />
        <Target rand={rand} denominator={262144} />
        <Target rand={rand} denominator={524288} />
        <Target rand={rand} denominator={1048576} />
        <Target rand={rand} denominator={2097152} />
        <Target rand={rand} denominator={4194304} />
        <Target rand={rand} denominator={8388608} />
        <Target rand={rand} denominator={16777216} />
        <Target rand={rand} denominator={33554432} />
        <Target rand={rand} denominator={67108864} />
        <Target rand={rand} denominator={134217728} />
        <Target rand={rand} denominator={268435456} />
        <Target rand={rand} denominator={536870912} />
      </div>
    </>
  );
};

type TargetProps = {
  numerator?: number;
  denominator: number;
  rand: RandType;
};

const Target = ({ numerator = 1, denominator, rand }: TargetProps) => {
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
