import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl }
}
