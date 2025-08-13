/* eslint-disable camelcase */
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
export function App () {
  const { fact, getFactAndUpdateState } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  const handleClick = async () => {
    getFactAndUpdateState()
  }

  return (
        <main>
            <h1>Fetch datos</h1>

            <button onClick={handleClick}>
              Get new fact
            </button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the three first words from: ${fact}`} />}
        </main>
  )
}
