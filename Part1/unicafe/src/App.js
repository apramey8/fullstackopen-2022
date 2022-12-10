import React, { useState } from 'react'

const Statistics = ({good, neutral, bad, all, average, postive}) =>{
  
  if(good === 0 && neutral === 0 && bad === 0){
    return (
      <p>No feedback given</p>
    )
  }
  else
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={all}/>
          <StatisticLine text="average" value={ isNaN(average) ? 0 : average.toFixed(2)}/>
          <StatisticLine text="positive" value={ isNaN(postive) ? 0: postive.toFixed(2)   + "%"}/>
        </tbody>
      </table>
    )
}

const Button = (props) => {
  return (
    <button onClick={props.clickEvent}>{props.text}</button>
  )
}

const StatisticLine = ({text,value}) => {
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
} 

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = ((good - bad)/all) * 100
  const postive = (good / all) * 100
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" clickEvent={()=> setGood(good + 1)}/>
      <Button text="neutral" clickEvent={()=> setNeutral( neutral + 1)}/>
      <Button text="bad" clickEvent={()=> setBad(bad + 1)}/>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} postive={postive}/>
    </div>
  )
}

export default App