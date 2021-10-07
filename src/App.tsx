import { Simulation } from './Simulation';
import { oneInAMillion } from './simulation_data';

export function App() {
  return (
    <div style={{ margin: '30px auto', width: '98%', textAlign: 'center' }}>
      <h1>Never Tell Me The Odds</h1>
      <main>
        <Simulation config={oneInAMillion} />
      </main>
    </div>
  );
}
