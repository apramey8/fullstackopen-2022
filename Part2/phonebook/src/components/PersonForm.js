import { useState } from 'react'
import personService from '../services/personService'

const PersonForm = ({persons, setPersons, setMessage}) => {

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addDetail = (event) =>{
      event.preventDefault()
      const existingPerson = persons.filter(person => person.name.trim() == newName.trim())
      if(existingPerson.length != 0){
        if(window.confirm(`${newName} is already present, replace the old number with a new one?`)){
          personService
          .putPerson({name : newName,  number : newNumber}, existingPerson[0].id)
          .then((returnedPerson) => {
            setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
            setMessage({message:`Updated ${returnedPerson.name}`, className: 'success'})
            setTimeout(() => {
              setMessage(null)
            },5000)
          })
          .catch((error) => {
            setMessage({message: error.response.data.error,className: 'error'})
            setTimeout(()=>{
              setMessage(null)
            },5000)
          })
        }
      }
      else{
        personService
        .postPerson({name : newName, number: newNumber})
        .then((returnedPerson)=>{
          setPersons(persons.concat(returnedPerson))
          setMessage({message:`Added ${returnedPerson.name}`, className: 'success'})
          setTimeout(() => {
            setMessage(null)
          },5000)
        })
        .catch((error) => {
          setMessage({message: error.response.data.error,className: 'error'})
          setTimeout(()=>{
            setMessage(null)
          },5000)
        })
      }

      setNewName('');
      setNewNumber('');
    }

    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }

    return(
        <form onSubmit={addDetail}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          <br></br>
          number: <input value={newNumber} onChange={handleNumberChange}/>          
        </div>
        <br></br>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm
