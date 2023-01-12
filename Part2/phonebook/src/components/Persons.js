const Person = ({person, deleteNote}) => {
  return(
      <p>{person.name} : {person.number} &nbsp; <button onClick={() => deleteNote(person.id, person.name)}>delete</button></p>
  )
}

const Persons = ({persons, filter, deleteNote}) => {
  return(
    <div>
      {(persons.filter((person) => (person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ))).map(person => <Person key={person.id}  person = {person} deleteNote={deleteNote}/>)}
    </div>
  )
}

export default Persons
