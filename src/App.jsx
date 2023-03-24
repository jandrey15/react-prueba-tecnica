import { useEffect, useState } from 'react'
import { useCatImage } from './hooks/useCatImage'
import { getRandomFact } from './services/fact'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
// https://reactjs.org/docs/hooks-rules.html

const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(fact => setFact(fact)).catch(err => console.log(err)) // long
    // getRandomFact().then(setFact) // shor
  }
  // recuperar la cita
  useEffect(refreshFact, [])

  return { fact, refreshFact }
} // { fact, refreshFact }

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  // const [fatcError, setFatcError] = useState()

  /*
  🔴 We're breaking the first rule by using a Hook in a condition
  if (fact) {
    useEffect(() => {
      console.log('hola mundo')
    }, [])
  }
  */

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {/* {fatcError && <p>Error: {fatcError}</p>} */}
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted the first three words for ${fact}`} />}
    </main>
  )
}
