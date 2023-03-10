import { useEffect, useState } from 'react'
import { getRandomFact } from './services/fact'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
// https://reactjs.org/docs/hooks-rules.html

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  // const [fatcError, setFatcError] = useState()

  // recuperar la cita
  useEffect(() => {
    getRandomFact().then(setFact) // shor
    // getRandomFact().then(fact => setFact(fact)).catch(err => console.log(err)) // long
  }, [])

  /*
  🔴 We're breaking the first rule by using a Hook in a condition
  if (fact) {
    useEffect(() => {
      console.log('hola mundo')
    }, [])
  }
  */

  // recuperar la imagen apartir de la cita recuperada
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?json=true`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  const handleClick = async () => {
    const fact = await getRandomFact()
    setFact(fact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Click me</button>
      {/* {fatcError && <p>Error: {fatcError}</p>} */}
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted the first three words for ${fact}`} />}
    </main>
  )
}
