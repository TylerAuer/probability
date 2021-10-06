import { useState } from 'react';
import { useInterval } from './hooks/use_interval';
import { OddsDot } from './OddsDot';
import { OddsSquare } from './OddsSquare';
import { RandType } from './types';

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

export const ProbabilityArray = () => {
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
        <OddsSquare rand={rand} denominator={2} />
        <OddsSquare rand={rand} denominator={4} />
        <OddsSquare rand={rand} denominator={8} />
        <OddsSquare rand={rand} denominator={16} />
        <OddsSquare rand={rand} denominator={32} />
        <OddsSquare rand={rand} denominator={64} />
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        {Array.from(Array(2000)).map(() => (
          <OddsDot rand={rand} denominator={1000000} />
        ))}
      </div>
    </>
  );
};
