import { useState } from 'react'

const App = () => {
  const greetings = "Morning Dear Mrs. / Mr."
  const [value, setValue] = useState(-1);

  const setNewValue = (newValue) => () => setValue(newValue)
  const resetValue = () => () => setValue(0)
  const incrementValue = () => () => setValue(value + 1)

  return (<>
    <h1>
      {greetings}
    </h1>
    <hr />
    <p>
      Function that returns a function <br />
      <strong> {value} </strong>  <br />
      <button onClick={setNewValue(100)}>Value Nth </button>
      <button onClick={resetValue()}>Reset</button>
      <button onClick={incrementValue()}>Increment</button>
    </p>
  </>);
}
export default App