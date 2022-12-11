import { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addDetail = (event) =>{
      event.preventDefault()

      if(persons.some(person => person.name === newName.trim())){
        alert(`${newName} is already present`)    
        return  
      }

      setPersons(persons.concat({ name : newName, number : newNumber, id : persons.length + 1}));
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
