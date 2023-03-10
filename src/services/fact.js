const CAT_ENDPOINT_RANDOM_FACTORY = 'https://catfact.ninja/fact'

export function getRandomFact () {
  return fetch(CAT_ENDPOINT_RANDOM_FACTORY)
    .then(res => {
      if (!res.ok) throw new Error('Error fetching fact')
      return res.json()
    })
    .then(data => {
      console.log({ data })
      const { fact } = data
      // setFact(fact)
      return fact
    })
    .catch(err => {
      // setFatcError(err)
      console.log(err)
      return err
    })
}
