import { useState } from 'react'
import PersonForm  from './components/PersonForm.js'
import Person from './components/Person'
import Filter  from './components/Filter.js'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number : '1234567890', id: 1}
  ]) 

  const [filteredPerson, setFilteredPerson] = useState(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter persons={persons} setFilteredPerson={setFilteredPerson}/>
      </div>
      <br></br>
      <PersonForm setPersons={setPersons} persons={persons}/>
      <h2>Numbers</h2>
      {filteredPerson.map(person => <Person key={person.id}  person = {person}/> )}
    </div>
  )
}

export default App