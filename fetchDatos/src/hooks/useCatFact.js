import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState('')
  const getFactAndUpdateState = () => {
    getRandomFact().then(setFact)
  }
  useEffect(getFactAndUpdateState, [])

  return { fact, getFactAndUpdateState }
}
