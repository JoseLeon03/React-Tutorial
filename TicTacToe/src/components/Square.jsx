export const Square = ({children,isSelected , updateBoard, index}) =>{
    const className= `square ${isSelected ? 'is-selected' : ''}` // Si es true, se le agrega la clase is-selected la cual indica que es el turno de ese jugador
    const handleClick = () => {
      //No se ejecuta updateBoard directamente en el onclick porque se ejecutaria inmediatamente
      updateBoard(index) // Cuando el usuario haga click, se ejecuta la funcion updateBoard
    }
    
    return(
      <div onClick={handleClick} className={className}>
      {children}
    </div> 
    )
  }
  