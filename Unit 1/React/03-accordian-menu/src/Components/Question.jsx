import React, { useState } from 'react'

const Question = ({id, title, info}) => {
  const [showing, setShowing] = useState(false)
  return (
    <article>
      <header>
      <h3>{title}</h3>
      <button className="btn" onClick={() => setShowing(!showing)}>{showing ? "-" : "+"}</button>
      </header>
      
      {showing && <p>{info}</p>}
    </article>
  )
}

export default Question
