import { Square } from "./Square"

export const WinnerModal = ({ winner, resetGame }) =>  {
  console.log(typeof winner)
  if (!winner) return null // Si no hay ganador, no se muestra nada

  const winnerText = winner === false ? 'Empate' : `Ganó: ${winner}` // Si el ganador es false, se muestra empate, si no, se muestra el ganador

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">
          {winner && <Square>{winner}</Square>}
        </header>
      </div>
      <footer>
        <button onClick={resetGame}>
          Empezar de nuevo
        </button>
      </footer>
    </section>

  )
}