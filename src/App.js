import React, { useState, useEffect } from 'react';
import './App.css';
import Characters from './components/Characters';
import axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [character, setCharacter] = useState([])
  // const [characterId, setCharacterID] = useState('0')


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => { 
        console.log(res.data)
        setCharacter(res.data) 
      })
      .catch(err => { console.log(err) 
      }) // eslint-disable-line
  }, [])

  return (
    <div className='App'>
       <Characters data={character}/>
    </div>
  );
}

export default App;
