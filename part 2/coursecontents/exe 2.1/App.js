import React from 'react'

const App = (props) => {
  const { courses } = props

  return (
    <div>
      <h1>Half Stack application development</h1>
      <ul>
        <li>{courses[0].name}</li>
        <li>{courses[1].name}</li>
        <li>{courses[2].name}</li>
      </ul>
    </div>
  )
}

export default App