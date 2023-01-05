import { useEffect, useState } from 'react'
import PersonForm  from './components/PersonForm.js'
import Persons from './components/Persons'
import Filter  from './components/Filter.js'
import axios from 'axios'

const App = () => {

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(response => 
      setPersons(response.data)
    )
  }, [])

  const [persons, setPersons] = useState([]) 
  const [ filter, setFilter ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter filter={filter} setFilter={setFilter}/>
      </div>
      <br></br>
      <PersonForm setPersons={setPersons} persons={persons}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App