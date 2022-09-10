import { useState } from 'react'

const App = () => {
  const greetings = "Morning Dear Mrs. / Mr."
  const [value, setValue] = useState(-1);

  const setToValue = (nVal) => setValue(nVal)

  return (<>
    <h1>
      {greetings}
    </h1>
    <hr />
    <p>
      Function that returns a function <br />
      <strong> {value} </strong>  <br />
      <button onClick={() => setToValue(100)}>Value Nth </button>
      <button onClick={() => setToValue(0)}>Reset</button>
      <button onClick={() => setToValue(value + 1)}>Increment</button>
    </p>
  </>);
}
export default App