import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {

  const [miliSegundos, setMiliSegundos] = useState(1000)

  return (
    <div>
      <span>Milisegundos { miliSegundos }</span>

      <br />

      <button className="btn btn-outline-secondary" onClick={() => setMiliSegundos(1000)}>
        1000
      </button>

      <button className="btn btn-outline-secondary" onClick={() => setMiliSegundos(2000)}>
        2000
      </button>

      <Timer milisegundos={miliSegundos}/>
    </div>
  );
}