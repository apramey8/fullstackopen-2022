import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><b>total of {sum} exercises</b></p>

const Part = ({ part }) => {
    return(
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => <Part key={part.id} part={part}/>)}
        </div>
    )
}

export default function Course({course}){
  return(
    
      <div>
        <Header course = {course.name}/>
        <Content parts={course.parts} />
        <Total sum={course.parts.reduce((s,p) => s + p.exercises , 0 )}/>
      </div>
    
  )
}
