import { useState, useEffect } from "react";
const API_ENDPOINT = `http://hn.algolia.com/api/v1/`;

// searchQuery will be something like &s=batman
export const useFetch = (searchQuery) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState([]);

  // url is always the API_ENDPOINT + the searchQuery
  const fetchMovie = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search || data);
        setError({show: false, msg: ""})
      }else{
        setError({show: true, msg: data.Error})
      }
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}${searchQuery}`);
    fetchMovie(`${API_ENDPOINT}${searchQuery}`)
  }, [searchQuery])

  return {loading, error, movies}
};
