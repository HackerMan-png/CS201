import React, { useState, useContext} from 'react'
import { useFetch } from './useFetch'

const StoryContext = React.createContext()

export const StoryProvider = ({children}) => {
  const [query, setQuery] = useState("React")
  const [page, setPage] = useState(0)
  const { stories, setStories, error, loading, maxPages } = useFetch(`query=${query}&page=${page}&tags=story`)
  // {console.log(`${movies} #4`)}

  return <StoryContext.Provider value={{query, setQuery, loading, stories, setStories, error, page, setPage, maxPages}} >
    {children}
    </StoryContext.Provider>

}

export const useStoryContext = () => {
  return useContext(StoryContext)
}