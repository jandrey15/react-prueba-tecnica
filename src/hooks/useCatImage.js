import { useEffect, useState } from 'react'
import { getCatImage } from '../services/cat-image'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // recuperar la imagen apartir de la cita recuperada
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    getCatImage({ threeFirstWords }).then(url => setImageUrl(url))
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
} // { imageUrl: 'http://...' }
