import React, { useState } from 'react'

const Dis = (props) => {
    return (
      <div>{props.count1}</div>
    )
  }

  const Dis1 = (props) => {
    return (
      <div>{props.count2}</div>
    )
  }

  const Dis2 = (props) => {
    return (
      <div>{props.count3}</div>
    )
  }
  const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  }


const App = () => {
  const [ count1 , setcount ] = useState(0)
  const [ count2 , setcount1 ] = useState(0)
  const [ count3 , setcount2 ] = useState(0)

  const increaseByOne = () => setcount(count1 + 1)
  const decreaseByOne = () => setcount1(count2 + 1)
  const setToZero = () => setcount2(count3 + 1)

  return (
    <div>
        <h1>GIVE FEEDBACK</h1>
      <Button
        handleClick={increaseByOne}
        text='good'
      />
      <Button
        handleClick={setToZero}
        text='neutral'
      />     
      <Button
        handleClick={decreaseByOne}
        text='bad'
      />       
      <h1>Statistics</h1>   
      <p>Good <Dis count1={count1}/></p>
      <p>Neutral <Dis2 count3={count3}/> </p>
      <p>Bad <Dis1 count2={count2}/></p>
      <p>All {count1+count2+count3}</p>
      <p>Average {(count1+(count3*-1))/count1+count2+count3}</p>
      <p>Postive Percentage{(count1/count1+count2+count3)*100}% </p>
    </div>
  )
}
export default App