import { useState } from "react"

const History = (props) => {
  if(props.allClicks.length === 0) {
    return (
    <>
      Click on Left or Right !
    </>)
  }

  return (
    <>
      button press history: {props.allClicks.join(' ')}
    </>
  )
}

const Button = ({text, clickEventHandler, nbTimes}) => {
  return (
    <>
      <button onClick={clickEventHandler}>{text}</button>
      <p>You clicked: <strong>{nbTimes} </strong>times on {text}</p>
    </>
  )
}

const App = () => {
 
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setLeft(left + 1)
    setAll(allClicks.concat('L'))
  }
  const handleRightClick = () => {
    setRight(right + 1)
    setAll(allClicks.concat('R'))
  }
 
  return (
    <>
      <Button text="Left" nbTimes={left} clickEventHandler={handleLeftClick}/>
      <Button text="Right" nbTimes={right} clickEventHandler={handleRightClick}/>
      <br />
      <History allClicks={allClicks}/>
    </>)
}

export default App; 