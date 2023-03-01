import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACTORY = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACTORY)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
