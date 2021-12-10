// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const CardBody = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  padding: 4px;
  border-bottom: 2px solid;
  background-color: linear-gradient(rgba(0, 250, 0, 0.9));
  border-radius: 4px;
  margin-left: 190px;
  color: black;

  transition: all 0.9s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: white;
  }
  
 `



const Characters = (props) => {

console.log(props)
const {data} = props

  return (
    <div>
      <h1 className="Header">REACT WARS</h1>
      {
        data.map((characters) => (
          <CardBody key={characters.name}>
            <h2>{characters.name}</h2>
            <p>{characters.hair_color}</p>
            
          </CardBody>
        ))
      }
    </div>
  )
}

export default Characters
