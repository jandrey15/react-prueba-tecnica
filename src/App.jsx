import { useEffect, useState } from 'react'
import { getCatImage } from './services/cat-image'
import { getRandomFact } from './services/fact'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
// https://reactjs.org/docs/hooks-rules.html

function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // recuperar la imagen apartir de la cita recuperada
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    getCatImage({ threeFirstWords }).then(url => setImageUrl(url))
  }, [fact])

  return { imageUrl }
} // { imageUrl: 'http://...' }

export function App () {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact })
  // const [fatcError, setFatcError] = useState()

  // recuperar la cita
  useEffect(() => {
    // getRandomFact().then(setFact) // shor
    getRandomFact().then(fact => setFact(fact)).catch(err => console.log(err)) // long
  }, [])

  /*
  🔴 We're breaking the first rule by using a Hook in a condition
  if (fact) {
    useEffect(() => {
      console.log('hola mundo')
    }, [])
  }
  */

  const handleClick = async () => {
    const fact = await getRandomFact()
    setFact(fact)
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
