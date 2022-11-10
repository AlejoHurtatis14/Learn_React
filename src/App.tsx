import { Counter } from "./components/counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <div>
      <h1>Hola Mundo - TS</h1>

      <hr />

      <Counter />

      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr />

      <TimerPadre />
    </div>
  );
}

export default App;
