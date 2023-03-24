import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

// https://reactjs.org/docs/hooks-rules.html

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
      {imageUrl && <img src={imageUrl} alt={`Image extracted the first three words for ${fact}`} />}
    </main>
  )
}
