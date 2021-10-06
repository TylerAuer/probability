import { useState } from 'react';
import { useInterval } from './hooks/use_interval';
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
  const [clockSpeedMs] = useState(5);
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
        <OddsSquare rand={rand} denominator={128} />
        <OddsSquare rand={rand} denominator={256} />
        <OddsSquare rand={rand} denominator={512} />
        <OddsSquare rand={rand} denominator={1024} />
        <OddsSquare rand={rand} denominator={2048} />
        <OddsSquare rand={rand} denominator={4096} />
        <OddsSquare rand={rand} denominator={8192} />
        <OddsSquare rand={rand} denominator={16384} />
        <OddsSquare rand={rand} denominator={32768} />
        <OddsSquare rand={rand} denominator={65536} />
        <OddsSquare rand={rand} denominator={131072} />
        <OddsSquare rand={rand} denominator={262144} />
        <OddsSquare rand={rand} denominator={524288} />
        <OddsSquare rand={rand} denominator={1048576} />
        <OddsSquare rand={rand} denominator={2097152} />
        <OddsSquare rand={rand} denominator={4194304} />
        <OddsSquare rand={rand} denominator={8388608} />
        <OddsSquare rand={rand} denominator={16777216} />
        <OddsSquare rand={rand} denominator={33554432} />
        <OddsSquare rand={rand} denominator={67108864} />
        <OddsSquare rand={rand} denominator={134217728} />
        <OddsSquare rand={rand} denominator={268435456} />
        <OddsSquare rand={rand} denominator={536870912} />
      </div>
    </>
  );
};
