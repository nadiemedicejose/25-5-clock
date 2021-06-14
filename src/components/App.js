import LengthControl from './LengthControl';
import Timer from './Timer';
import TimerControl from './TimerControl';
import '../styles/App.scss';

export default function App() {
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div id='length-controls'>
        <LengthControl name='break' value={5} />
        <LengthControl name='session' value={25} />
      </div>
      <Timer />
      <TimerControl />
    </div>
  );
}
