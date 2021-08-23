import React, { useState, useEffect } from "react";
import Tours from "./Pages/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch {
      setLoading(false)
      setError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <main className="section">
      <div className="spinner"></div>
      <h1>Loading...</h1>
    </main>;
  }

  if(error) {
    return <main className="section">
      <h1>There was an error... </h1>
    </main>
  }

  return(
  <main className="section">
      <Tours tours={tours} />
  </main>
  ) }

export default App;
