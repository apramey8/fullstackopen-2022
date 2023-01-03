import { useState } from 'react'

const Person = ({person}) => {
  return(
      <p>{person.name} : {person.number}</p>
  )
}

const Persons = ({persons, filter}) => {
  return(
    <div>
      {(persons.filter((person) => (person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ))).map(person => <Person key={person.id}  person = {person}/>)}
    </div>
  )
}

export default Persons
