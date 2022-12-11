
import { useState } from 'react'


const Filter = ({persons, setFilteredPerson}) => {

    const [ filter, setFilter ] = useState('')
    
    const handleFilterChange = (event) =>{
        setFilter(event.target.value)

        if(event.target.value == '')
            setFilteredPerson(persons)
        else
            setFilteredPerson(persons.filter((person) => (person.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 )))
    }

    return(
        <div>
            filter shown with <input onChange={handleFilterChange} value={filter}></input>
        </div>
    )
}
export default Filter