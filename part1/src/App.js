import { useState } from 'react'
const App = () => {
  console.log(useState(0));
  const [counter, getCounter] = useState(0);

  setTimeout(
    () => getCounter(counter + 2),
    1000)
    console.log("rendering...", counter)
  return (
    <>
      {counter}
    </>
  )
}
export default App;  