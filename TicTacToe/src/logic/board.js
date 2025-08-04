import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) { // Recorre las combinaciones ganadoras
      const [a, b, c] = combo // Desestructura la combinacion ganadora
      if (
        boardToCheck[a] && // Si hay una x o una o en el cuadrado
        boardToCheck[a] === boardToCheck[b] // Si el cuadrado a es igual al cuadrado b
        && boardToCheck[a] === boardToCheck[c] // Si el cuadrado a es igual al cuadrado c
      ) { // Si hay una combinacion ganadora
        return boardToCheck[a] // Retorna el ganador
      }
    }
    return null // Si no hay ganador, retorna null
  }