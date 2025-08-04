import React, { useState } from "react"
import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { checkWinner } from "./logic/board"
import { WinnerModal } from "./components/winnerModal"
import { resetGameStorage, saveGame } from "./logic/storage"
// La actualizacio de los estados en react son asincronas, por lo que no se puede usar el estado inmediatamente
// El useState jamas debe estar dentro de un if, ya que se ejecuta cada vez que se renderiza el componente

function App() {
  //En este tablero rellenaremos con las x o las o
  //Debe estar aca porque se debe renderizar cada vez que el usuario haga click
  const [board, setBoard] = useState(() =>{
    // Se hace dentro del useState para que solo se ejecute una vez
    const boardFromStorage = window.localStorage.getItem('board') // Se obtiene el tablero del local storage
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null) // Si hay un tablero en el local storage, se parsea y se devuelve, si no, se devuelve un array de 9 elementos null
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn') // Se obtiene el turno del local storage
    return turnFromStorage ?? TURNS.x // Si hay un turno en el local storage, se devuelve, si no, se devuelve TURNS.x
  }) 
  const [winner, setWinner] = useState(() => {
    const winnerFromStorage = window.localStorage.getItem('winner') // Se obtiene el ganador del local storage
    return winnerFromStorage ? JSON.parse(winnerFromStorage) : null // Si hay un ganador en el local storage, se parsea y se devuelve, si no, se devuelve null
  }) 
  
  const resetGame = () => {
    setBoard(Array(9).fill(null)) // Se reinicia el tablero
    setTurn(TURNS.x) // Se reinicia el turno
    setWinner(null) // Se reinicia el ganador

    resetGameStorage()
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null) // Si todos los cuadrados son diferentes de null, es un empate
    //every recorre el array y si todos los elementos cumplen la condicion, retorna true
  }

  const updateBoard = (index) =>{

    if(board[index] || winner ) return // Si ya hay una x o una o en el cuadrado, no se hace nada
  
    const newBoard = [...board] // Se hace una copia del tablero
    newBoard[index] = turn // Se actualiza el tablero con el turno actual
    setBoard(newBoard) // Se actualiza el tablero
   
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x // Si el turno es x, se cambia el nuevo turno a o y viceversa
    setTurn(newTurn) // Se actualiza el turno

    const newWinner = checkWinner(newBoard) // Se verifica si hay un ganador

    saveGame({board: newBoard, turn: newTurn, winner: newWinner}) // Se guarda el juego en el local storage

    if(newWinner) { // Si hay un ganador
      setWinner(newWinner) // Se actualiza el ganador
    } else if (checkEndGame(newBoard)) { // Si no hay un ganador, se verifica si hay un empate
      setWinner(false) // Si hay un empate, se actualiza el ganador a false
    }
  }
 
  return (
    <main className="board">
      <h1>Tic tac</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {
          board.map((square, index) => {
            return(
             <Square
              key={index}
              index={index}
              updateBoard={updateBoard} // No se le pasa la ejecucion para que solo se ejecute cuando el usuario haga click
             >
              {square} 
             </Square>
            )
          })
        }
      </section>
      <section className="turn">
      {/*Estos Square indican de quien es el turno,
       y depende de isSelected mediante el TURNS */}
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>
      <section>
        <WinnerModal resetGame={resetGame} winner={winner}/>
      </section>
    </main>
  )
}

export default App
