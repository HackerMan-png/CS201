import { useState, useEffect } from "react";
const API_ENDPOINT = `https://hn.algolia.com/api/v1/search?`;

// searchQuery will be something like &s=batman
export const useFetch = (searchQuery) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [maxPages, setMaxPages] = useState(0)
  const [stories, setStories] = useState([]);

  // url is always the API_ENDPOINT + the searchQuery
  const fetchMovie = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      setStories(data.hits || []);
      setMaxPages(data.nbPages || 0)
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}${searchQuery}`);
    fetchMovie(`${API_ENDPOINT}${searchQuery}`);
  }, [searchQuery]);

  return { loading, error, stories, setStories, maxPages };
};
