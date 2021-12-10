// Write your Character component here
import React from 'react'

const Characters = (props) => {

console.log(props)
const {data} = props

  return (
    <section>
      <h1>Characters</h1>
      {
        data.map((characters) => (
          <article key={characters.name}>
            <h2>{characters.name}</h2>
            
          </article>
        ))
      }
    </section>
  )
}

export default Characters
