import React from 'react'
import Question from '../Components/Question'

const Questions = ({data}) => {
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {data.map((question) => {
            return <Question key={question.id} {...question}/>
          })}
        </section>
      </div>
    </main>
  )
}

export default Questions
