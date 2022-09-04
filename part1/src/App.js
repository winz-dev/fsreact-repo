import { useState } from 'react'

const Display = (props) => (<>{props.counter}</>)
const Button = (props) => (<button onClick={props.onClick}>{props.text}</button>)
const App = () => {
  const [counter, setCounter] = useState(0);

  const setToZero = () => setCounter(0)
  const addOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <div>
      <Display counter={counter} /> <br />
      <Button text="Reset" onClick={setToZero} />
      <Button text="Plus" onClick={addOne} />
      <Button text="Minus" onClick={decreaseByOne} />
    </div>
  )
}
export default App;  