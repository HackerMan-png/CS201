import React, { useState, useContext} from 'react'
import { useFetch } from './useFetch'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(0)
  const { pokemonList, setPokemonList, error, loading} = useFetch(`pokemon?limit=1118&offset=0`)
  // {console.log(`${movies} #4`)}

  return <AppContext.Provider value={{query, setQuery, loading, pokemonList, setPokemonList, error}} >
    {children}
    </AppContext.Provider>

}

export const useAppContext = () => {
  return useContext(AppContext)
}