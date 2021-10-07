import { useState } from 'react';
import { useInterval } from './hooks/use_interval';
import { Target } from './Target';
import { RandType, SimulationConfig } from './types';

// TODO: Add start/stop button
// TODO: Abstract creation of page into a data structure (ex: say odds wanted and page is generated)
// TODO: Style probabilities into boxes
// TODO: OddsSquares scale values to 1 in n instead of 0 to 1 so can display rand value
// TODO: Animations when target is hit
// TODO: Adjustable speed
// TODO: Alternative OddsSquare display that is just a box that changes colors when hit
// TODO: Add sound effect for clock running
// TODO: Add close sounds effect
// TODO: Add target hit sound effect

type SimulationProps = {
  config: SimulationConfig;
};

export const Simulation = ({ config }: SimulationProps) => {
  const [clockSpeedMs] = useState(100);
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

  const { title, description } = config;

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>Cycle #{rand.cycle}</div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        {config.targetList.map((target, index) => (
          <Target
            rand={rand}
            numerator={target.numerator}
            denominator={target.denominator}
            type={target.type}
          />
        ))}
      </div>
    </>
  );
};
