// eslint-disable-next-line camelcase
const CAT_ENDPOINT_RANDOM_fACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  return fetch(CAT_ENDPOINT_RANDOM_fACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      return (fact)
    })
}
