import { useState } from "react";

function App() {

  function generarAleatorios() {
    const vec = new Array(5)
    for (let x = 0; x < vec.length; x++)
      vec[x] = Math.trunc(Math.random() * 10)
    setNumeros(vec)
  }

  const [numeros, setNumeros] = useState([0, 0, 0, 0, 0]);

  return (
    <center><div>
      <hr />
      <p>Números actuales:</p>
      <hr />
      {numeros.map(num => (<p>{num}</p>))}
      <hr />
      <button onClick={generarAleatorios}>Cambiar números</button>
      <hr />
    </div></center>
  );
}

export default App;