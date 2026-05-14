import { useState } from "react";

function App() {

  const [texto, setTexto] = useState("Desligado")

  function trocarTexto() {

    if (texto === "Desligado") {

      setTexto("Ligado")

    } else {
      setTexto("Desligado")
    }
  }

  return (

    <div>
      <h1
        style={{
          color: texto === "Ligado"
            ? "green"
            : "red"
        }}
      >{texto}</h1>
      <button onClick={trocarTexto}>
        trocar
      </button>
    </div>
  )
}

export default App