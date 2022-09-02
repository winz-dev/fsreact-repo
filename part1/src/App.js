import { useState } from 'react'
const App = () => {
  const [counter, setCounter] = useState(0);

    console.log("rendering...", counter)
    const handleClick = () => setCounter(counter + 2)
  return (
    <div>
      <strong>{counter}</strong>
      <button onClick={() => setCounter(counter)}>Click zero!</button>
      <button onClick={() => setCounter(counter + 1)}>Click one!</button>
      <button onClick={handleClick}>Click two!</button>
    </div>
  )
}
export default App;  