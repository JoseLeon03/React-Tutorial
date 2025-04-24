import { useEffect, useState } from 'react'

export const FollowMouse = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e // Obtenemos la posición del puntero
      setPosition({ x: clientX, y: clientY }) // Actualizamos el estado con la posición
    }
    if (enable) {
      // Las suscripciones las debemos limpiar
      // Si el puntero está activado, agregamos el evento
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      // Si el puntero no está activado, removemos el evento
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  return (
    <>
    <div style={{
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid #fff',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -25,
      top: -25,
      width: 50,
      height: 50,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}
    />
    <button onClick={() => setEnable(!enable)}>
      {enable ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
    </>
  )
}

function App () {
  const [mounted, setMounted] = useState(true)
  return (
    <main>
     {mounted && <FollowMouse />}
     <button onClick={() => setMounted(!mounted)}>
      Follow mouse component
      </button>
    </main>
  )
}

export default App
