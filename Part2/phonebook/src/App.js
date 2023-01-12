import { useEffect, useState } from 'react'
import PersonForm  from './components/PersonForm.js'
import Persons from './components/Persons'
import Filter  from './components/Filter.js'
import personService from './services/personService'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState(null)

  useEffect(() => {
    personService
      .getPersons()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const deleteNote = (id, name) => {
    if(window.confirm(`Do you want to delete ${name} ?`)){
      personService
      .deletePerson(id)
      .then(()=>{
        personService
        .getPersons()
        .then(persons => {
          setPersons(persons)
        })
      })
      .catch(error => {
        setMessage({ message:`Information of ${name} has already been removed from server`, className: 'error'})
        setTimeout(() => {
          setMessage(null)
        },1000)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter filter={filter} setFilter={setFilter}/>
      </div>
      <br></br>
      <PersonForm setPersons={setPersons} persons={persons} setMessage={setMessage}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deleteNote={deleteNote}/>
    </div>
  )
}

export default App