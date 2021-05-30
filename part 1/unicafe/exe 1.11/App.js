import React, {useState} from 'react';


const Statistic = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}

const Statistics = (props) => {
    const all = props.Count1 + props.Count3 + props.Count2
    const average = (props.Count1 + (props.Count3*-1))/all
    const positive = (props.Count1)/all *100
    if(all === 0){
        return(
          <p>No Feedback Given</p>
        )
      }
    
    return (
        <div>
            <table>
                <tr><Statistic text="Good" value={props.Count1} /></tr>
                <tr><Statistic text="Neutral" value={props.Count2} /></tr>
                <tr><Statistic text="Bad" value={props.Count3} /></tr>
                <tr><Statistic text="All" value={all} /></tr>
                <tr><Statistic text="Average" value={average} /></tr>
                <tr><Statistic text="Positive" value={positive} /></tr>
        
            </table>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.event}>{props.text}</button>
    )
}
const App = () => {
  const [ Count1 , setCount ] = useState(0)
  const [ Count2 , setCount1 ] = useState(0)
  const [ Count3 , setCount2 ] = useState(0)
    
    return (
        <div>
            <h1> GIVE FEEDBACK </h1>
            <div>
                <Button event={()=> setCount(Count1+1)} text="Good" />
                <Button event={()=> setCount1(Count2+1)} text="Neutral" />
                <Button event={()=> setCount2(Count3+1)} text="Bad" />
                                
            </div>
            <h2>Statistics</h2>
            <Statistics Count1={Count1}  Count3={Count3} Count2={Count2} />
        </div>
    )
}



export default App