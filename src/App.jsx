import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACTORY = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
// https://reactjs.org/docs/hooks-rules.html

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // recuperar la cita
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACTORY)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
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

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted the first three words for ${fact}`} />}
    </main>
  )
}
