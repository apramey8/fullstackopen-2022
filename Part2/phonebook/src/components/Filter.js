
import { useState } from 'react'


const Filter = ({filter, setFilter}) => {
    
    const handleFilterChange = (event) =>{
        setFilter(event.target.value)
    }

    return(
        <div>
            filter shown with <input onChange={handleFilterChange} value={filter}></input>
        </div>
    )
}
export default Filter