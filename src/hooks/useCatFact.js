import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/fact'
export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(fact => setFact(fact)).catch(err => console.log(err)) // long
    // getRandomFact().then(setFact) // shor
  }
  // recuperar la cita
  useEffect(refreshFact, [])

  return { fact, refreshFact }
} // { fact, refreshFact }
