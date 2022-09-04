import { useState } from 'react'

const Display = ({counter}) => (<>{counter}</>)
const Button = ({text, onClick}) => (<button onClick={onClick}>{text}</button>)
const App = () => {
  const [counter, setCounter] = useState(0);

  const setToZero = () => setCounter(0) 
  const addOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <>
      <Display counter={counter} /> <br />
      <Button text="Reset" onClick={setToZero} />
      <Button text="Plus" onClick={addOne} />
      <Button text="Minus" onClick={decreaseByOne} />
    </>
  )
}
export default App;  