export const saveGame = ({board, turn, winner}) => {
    window.localStorage.setItem('board', JSON.stringify(board)) // Se guarda el tablero en el local storage
    window.localStorage.setItem('turn', turn) // Se guarda el turno en el local storage
    window.localStorage.setItem('winner', JSON.stringify(winner)) // Se guarda el ganador en el local storage
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board') // Se elimina el tablero del local storage
    window.localStorage.removeItem('turn') // Se elimina el turno del local storage
    window.localStorage.removeItem('winner') // Se elimina el ganador del local storage
}