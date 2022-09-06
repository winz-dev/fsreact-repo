import { useState } from "react"

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const clickLeft = () => setLeft(left + 1)
  const clickRight = () => setRight(right + 1)

  return (
    <>
      <button onClick={clickLeft}>  Left => <strong>{left}</strong></button>
      <button onClick={clickRight}> Right =><strong>{right}</strong></button>
    </>)
}

export default App; 