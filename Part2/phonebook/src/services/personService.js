import axios from 'axios'
const baseURL = "http://localhost:3001/persons"

const getPersons = async () => {
    const request = axios.get(baseURL)
    return await request.then(response => response.data)
}

const postPerson = async (person) => {
    const request = axios.post(baseURL, person)
    return await request.then(response => response.data)
}

const deletePerson = async (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return await request.then(response => response.data)
}

const putPerson = async (person, id) => {
    const request = axios.put(`${baseURL}/${id}`,person)
    return await request.then(response => response.data)
}

export default {
    getPersons,
    postPerson,
    deletePerson,
    putPerson
}