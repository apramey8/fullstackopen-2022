import { useState } from 'react'
import PersonForm  from './components/PersonForm.js'
import Persons from './components/Persons'
import Filter  from './components/Filter.js'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number : '1234567890', id: 1}
  ]) 

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