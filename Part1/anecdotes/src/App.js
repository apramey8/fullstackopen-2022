import React, { useState, useEffect } from 'react'

const Anecdote = ({anecdote,votes}) =>{

    return(
      <div>
        <p>{anecdote}</p>
        <p>{votes} votes</p>
      </div>
    )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [index, setIndex] = useState(0)
  const [votes,updateVotes] = useState(new Array(6).fill(0))
  const [maxVotes, updatedMaxVotes] = useState(-1)


  function getNextAnecdote() {
    let random = Math.floor(Math.random() * 6)
    setIndex(random)
  }

  function incrementVote(){
    let votes_copy = [...votes]
    votes_copy[index] += 1
    updateVotes(votes_copy)
  }
    
  useEffect(()=>{
    changeMaxVotes()
  })

  function changeMaxVotes(){
    if(Math.max(...votes) === 0)
      updatedMaxVotes(-1)
    else
      updatedMaxVotes(votes.indexOf(Math.max(...votes)))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[index]} votes={votes[index]}/>
      <button onClick={incrementVote}>Vote</button>
      <button onClick={getNextAnecdote}>next anecdotes</button>
      <h1>Anecdote with most votes</h1>
      {maxVotes !== -1 && <Anecdote anecdote={anecdotes[maxVotes]} votes={votes[maxVotes]}/>}
    </div>
  )
}


export default App
