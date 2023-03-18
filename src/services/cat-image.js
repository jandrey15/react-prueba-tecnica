const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function getCatImage ({ threeFirstWords }) {
  return fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?json=true`)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      const { url } = response
      // setImageUrl(url) Mala practica
      return url
    }).catch(err => {
      console.log(err)
      return err
    })
}
